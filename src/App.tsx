/** @format */

import * as esbuild from "esbuild-wasm";
import { useState, useEffect, useRef } from "react";
import { fetchPlugin } from "./plugins/fetch-plugin";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";

function App() {
  const [input, setInput] = useState("");
  const ref = useRef<any>();
  const iframe = useRef<any>();

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  };

  const handleClick = async () => {
    if (!ref.current) return;

    iframe.current.srcdoc = html;

    const res = await ref.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        "process.env.NODE_ENV": '"production"',
        global: "window",
      },
    });

    iframe.current.contentWindow.postMessage(res.outputFiles[0].text, "*");
  };

  useEffect(() => {
    startService();
  }, []);

  const html = `
  <html>
    <head></head>
    <body>
      <div id="root"></div>
      <script>
        window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch (err) {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
            console.error(err);
          }
        }, false);
      </script>
    </body>
  </html>
`;

  return (
    <div>
      <textarea
        name="text"
        id="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <iframe sandbox="allow-scripts" title="test" srcDoc={html} ref={iframe} />
    </div>
  );
}

export default App;
