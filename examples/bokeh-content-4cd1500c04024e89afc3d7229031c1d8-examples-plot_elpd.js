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
    
      
      
    
      const element = document.getElementById("c029a09b-63a6-4de6-ad35-d78a1ef0f092");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c029a09b-63a6-4de6-ad35-d78a1ef0f092' but no matching script tag was found.")
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
                    
                  const docs_json = '{"8fe54876-96d7-4bab-9320-7d6b6c815eaf":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"20654"}},"id":"20648","type":"BoxZoomTool"},{"attributes":{},"id":"20639","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20654","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20655","type":"PolyAnnotation"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20673"},"group":null,"major_label_policy":{"id":"20674"},"ticker":{"id":"20643"}},"id":"20642","type":"LinearAxis"},{"attributes":{"tools":[{"id":"20646"},{"id":"20647"},{"id":"20648"},{"id":"20649"},{"id":"20650"},{"id":"20651"},{"id":"20652"},{"id":"20653"}]},"id":"20656","type":"Toolbar"},{"attributes":{},"id":"20679","type":"Selection"},{"attributes":{"children":[{"id":"20685"},{"id":"20683"}]},"id":"20686","type":"Column"},{"attributes":{"callback":null},"id":"20653","type":"HoverTool"},{"attributes":{"axis":{"id":"20642"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20645","type":"Grid"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20665","type":"Scatter"},{"attributes":{},"id":"20649","type":"WheelZoomTool"},{"attributes":{},"id":"20678","type":"UnionRenderers"},{"attributes":{"source":{"id":"20666"}},"id":"20668","type":"CDSView"},{"attributes":{},"id":"20647","type":"PanTool"},{"attributes":{},"id":"20651","type":"UndoTool"},{"attributes":{},"id":"20674","type":"AllLabels"},{"attributes":{"toolbars":[{"id":"20656"}],"tools":[{"id":"20646"},{"id":"20647"},{"id":"20648"},{"id":"20649"},{"id":"20650"},{"id":"20651"},{"id":"20652"},{"id":"20653"}]},"id":"20684","type":"ProxyToolbar"},{"attributes":{},"id":"20630","type":"DataRange1d"},{"attributes":{},"id":"20652","type":"SaveTool"},{"attributes":{},"id":"20676","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"20638"}],"center":[{"id":"20641"},{"id":"20645"}],"height":288,"left":[{"id":"20642"}],"output_backend":"webgl","renderers":[{"id":"20667"}],"title":{"id":"20669"},"toolbar":{"id":"20656"},"toolbar_location":null,"width":432,"x_range":{"id":"20630"},"x_scale":{"id":"20634"},"y_range":{"id":"20632"},"y_scale":{"id":"20636"}},"id":"20629","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"20629"},0,0]]},"id":"20683","type":"GridBox"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20679"},"selection_policy":{"id":"20678"}},"id":"20666","type":"ColumnDataSource"},{"attributes":{},"id":"20673","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"formatter":{"id":"20676"},"group":null,"major_label_policy":{"id":"20677"},"ticker":{"id":"20639"}},"id":"20638","type":"LinearAxis"},{"attributes":{},"id":"20677","type":"AllLabels"},{"attributes":{},"id":"20646","type":"ResetTool"},{"attributes":{"overlay":{"id":"20655"}},"id":"20650","type":"LassoSelectTool"},{"attributes":{},"id":"20634","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"20666"},"glyph":{"id":"20665"},"group":null,"hover_glyph":null,"view":{"id":"20668"}},"id":"20667","type":"GlyphRenderer"},{"attributes":{},"id":"20643","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"20684"},"toolbar_location":"above"},"id":"20685","type":"ToolbarBox"},{"attributes":{"axis":{"id":"20638"},"coordinates":null,"group":null,"ticker":null},"id":"20641","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20669","type":"Title"},{"attributes":{},"id":"20632","type":"DataRange1d"},{"attributes":{},"id":"20636","type":"LinearScale"}],"root_ids":["20686"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"8fe54876-96d7-4bab-9320-7d6b6c815eaf","root_ids":["20686"],"roots":{"20686":"c029a09b-63a6-4de6-ad35-d78a1ef0f092"}}];
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