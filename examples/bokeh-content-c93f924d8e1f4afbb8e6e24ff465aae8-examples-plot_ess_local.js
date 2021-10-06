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
    
      
      
    
      const element = document.getElementById("8388afbe-8f35-4c1f-b6fc-0101ff559028");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8388afbe-8f35-4c1f-b6fc-0101ff559028' but no matching script tag was found.")
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
                    
                  const docs_json = '{"440aa536-c162-4897-b99e-96bfc81db949":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21141","type":"Selection"},{"attributes":{},"id":"21135","type":"BasicTickFormatter"},{"attributes":{},"id":"21103","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"21148"},"toolbar_location":"above"},"id":"21149","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21122","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21130","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21129","type":"Span"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21108","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"21108"}},"id":"21102","type":"BoxZoomTool"},{"attributes":{},"id":"21136","type":"AllLabels"},{"attributes":{},"id":"21093","type":"BasicTicker"},{"attributes":{},"id":"21143","type":"Selection"},{"attributes":{},"id":"21101","type":"PanTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21131","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21141"},"selection_policy":{"id":"21140"}},"id":"21119","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"21110"}],"tools":[{"id":"21100"},{"id":"21101"},{"id":"21102"},{"id":"21103"},{"id":"21104"},{"id":"21105"},{"id":"21106"},{"id":"21107"}]},"id":"21148","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"21149"},{"id":"21147"}]},"id":"21150","type":"Column"},{"attributes":{"callback":null},"id":"21107","type":"HoverTool"},{"attributes":{},"id":"21088","type":"LinearScale"},{"attributes":{},"id":"21139","type":"AllLabels"},{"attributes":{"axis":{"id":"21092"},"coordinates":null,"group":null,"ticker":null},"id":"21095","type":"Grid"},{"attributes":{"below":[{"id":"21092"}],"center":[{"id":"21095"},{"id":"21099"}],"height":500,"left":[{"id":"21096"}],"output_backend":"webgl","renderers":[{"id":"21123"},{"id":"21127"},{"id":"21129"},{"id":"21130"}],"title":{"id":"21131"},"toolbar":{"id":"21110"},"toolbar_location":null,"width":500,"x_range":{"id":"21084"},"x_scale":{"id":"21088"},"y_range":{"id":"21086"},"y_scale":{"id":"21090"}},"id":"21083","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21084","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21138"},"group":null,"major_label_policy":{"id":"21139"},"ticker":{"id":"21093"}},"id":"21092","type":"LinearAxis"},{"attributes":{},"id":"21090","type":"LinearScale"},{"attributes":{},"id":"21106","type":"SaveTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21143"},"selection_policy":{"id":"21142"}},"id":"21126","type":"ColumnDataSource"},{"attributes":{},"id":"21142","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"21109"}},"id":"21104","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21126"},"glyph":{"id":"21125"},"group":null,"hover_glyph":null,"view":{"id":"21128"}},"id":"21127","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21135"},"group":null,"major_label_policy":{"id":"21136"},"ticker":{"id":"21097"}},"id":"21096","type":"LinearAxis"},{"attributes":{},"id":"21138","type":"BasicTickFormatter"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21125","type":"Scatter"},{"attributes":{"coordinates":null,"data_source":{"id":"21119"},"glyph":{"id":"21120"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21122"},"nonselection_glyph":{"id":"21121"},"view":{"id":"21124"}},"id":"21123","type":"GlyphRenderer"},{"attributes":{},"id":"21105","type":"UndoTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21109","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21120","type":"Circle"},{"attributes":{},"id":"21097","type":"BasicTicker"},{"attributes":{"tools":[{"id":"21100"},{"id":"21101"},{"id":"21102"},{"id":"21103"},{"id":"21104"},{"id":"21105"},{"id":"21106"},{"id":"21107"}]},"id":"21110","type":"Toolbar"},{"attributes":{"axis":{"id":"21096"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21099","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21121","type":"Circle"},{"attributes":{"source":{"id":"21126"}},"id":"21128","type":"CDSView"},{"attributes":{"children":[[{"id":"21083"},0,0]]},"id":"21147","type":"GridBox"},{"attributes":{},"id":"21100","type":"ResetTool"},{"attributes":{},"id":"21086","type":"DataRange1d"},{"attributes":{},"id":"21140","type":"UnionRenderers"},{"attributes":{"source":{"id":"21119"}},"id":"21124","type":"CDSView"}],"root_ids":["21150"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"440aa536-c162-4897-b99e-96bfc81db949","root_ids":["21150"],"roots":{"21150":"8388afbe-8f35-4c1f-b6fc-0101ff559028"}}];
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