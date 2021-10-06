(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("42587062-fab9-4570-bf1e-1f62ca6f24aa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '42587062-fab9-4570-bf1e-1f62ca6f24aa' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"c6a62b18-7036-41b6-b8e7-dbafa8818c75":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17382","type":"UnionRenderers"},{"attributes":{},"id":"17351","type":"PanTool"},{"attributes":{},"id":"17343","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17359"}},"id":"17354","type":"LassoSelectTool"},{"attributes":{},"id":"17353","type":"WheelZoomTool"},{"attributes":{},"id":"17356","type":"SaveTool"},{"attributes":{"coordinates":null,"formatter":{"id":"17380"},"group":null,"major_label_policy":{"id":"17381"},"ticker":{"id":"17343"}},"id":"17342","type":"LinearAxis"},{"attributes":{"source":{"id":"17370"}},"id":"17372","type":"CDSView"},{"attributes":{},"id":"17383","type":"Selection"},{"attributes":{},"id":"17380","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17359","type":"PolyAnnotation"},{"attributes":{},"id":"17355","type":"UndoTool"},{"attributes":{"tools":[{"id":"17350"},{"id":"17351"},{"id":"17352"},{"id":"17353"},{"id":"17354"},{"id":"17355"},{"id":"17356"},{"id":"17357"}]},"id":"17360","type":"Toolbar"},{"attributes":{},"id":"17338","type":"LinearScale"},{"attributes":{},"id":"17336","type":"DataRange1d"},{"attributes":{},"id":"17381","type":"AllLabels"},{"attributes":{"below":[{"id":"17342"}],"center":[{"id":"17345"},{"id":"17349"}],"height":288,"left":[{"id":"17346"}],"output_backend":"webgl","renderers":[{"id":"17371"}],"title":{"id":"17373"},"toolbar":{"id":"17360"},"toolbar_location":null,"width":432,"x_range":{"id":"17334"},"x_scale":{"id":"17338"},"y_range":{"id":"17336"},"y_scale":{"id":"17340"}},"id":"17333","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17350","type":"ResetTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17369","type":"Scatter"},{"attributes":{"children":[{"id":"17389"},{"id":"17387"}]},"id":"17390","type":"Column"},{"attributes":{"axis":{"id":"17342"},"coordinates":null,"group":null,"ticker":null},"id":"17345","type":"Grid"},{"attributes":{},"id":"17378","type":"AllLabels"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17358","type":"BoxAnnotation"},{"attributes":{},"id":"17377","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"17360"}],"tools":[{"id":"17350"},{"id":"17351"},{"id":"17352"},{"id":"17353"},{"id":"17354"},{"id":"17355"},{"id":"17356"},{"id":"17357"}]},"id":"17388","type":"ProxyToolbar"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17383"},"selection_policy":{"id":"17382"}},"id":"17370","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"17388"},"toolbar_location":"above"},"id":"17389","type":"ToolbarBox"},{"attributes":{"axis":{"id":"17346"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17349","type":"Grid"},{"attributes":{},"id":"17347","type":"BasicTicker"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17377"},"group":null,"major_label_policy":{"id":"17378"},"ticker":{"id":"17347"}},"id":"17346","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17357","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17373","type":"Title"},{"attributes":{},"id":"17334","type":"DataRange1d"},{"attributes":{},"id":"17340","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"17370"},"glyph":{"id":"17369"},"group":null,"hover_glyph":null,"view":{"id":"17372"}},"id":"17371","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17358"}},"id":"17352","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"17333"},0,0]]},"id":"17387","type":"GridBox"}],"root_ids":["17390"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"c6a62b18-7036-41b6-b8e7-dbafa8818c75","root_ids":["17390"],"roots":{"17390":"42587062-fab9-4570-bf1e-1f62ca6f24aa"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();