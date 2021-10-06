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
    
      
      
    
      const element = document.getElementById("6b979fc1-62eb-4081-bc9d-42c41b668e33");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6b979fc1-62eb-4081-bc9d-42c41b668e33' but no matching script tag was found.")
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
                    
                  const docs_json = '{"606ca4c6-9cdc-4112-8ee0-10b6eb6894e1":{"defs":[],"roots":{"references":[{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18207"},"selection_policy":{"id":"18206"}},"id":"18172","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18179","type":"Circle"},{"attributes":{"callback":null},"id":"18152","type":"HoverTool"},{"attributes":{},"id":"18203","type":"AllLabels"},{"attributes":{},"id":"18135","type":"LinearScale"},{"attributes":{"source":{"id":"18166"}},"id":"18171","type":"CDSView"},{"attributes":{"axis":{"id":"18137"},"coordinates":null,"group":null,"ticker":null},"id":"18140","type":"Grid"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18191","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"18178"},"glyph":{"id":"18179"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18181"},"nonselection_glyph":{"id":"18180"},"view":{"id":"18183"}},"id":"18182","type":"GlyphRenderer"},{"attributes":{},"id":"18212","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18187","type":"MultiLine"},{"attributes":{"coordinates":null,"formatter":{"id":"18199"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18200"},"ticker":{"id":"18164"}},"id":"18141","type":"LinearAxis"},{"attributes":{"source":{"id":"18172"}},"id":"18177","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18174","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18175","type":"MultiLine"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18153","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18167","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18186","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18205"},"selection_policy":{"id":"18204"}},"id":"18166","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18192","type":"Circle"},{"attributes":{"source":{"id":"18190"}},"id":"18195","type":"CDSView"},{"attributes":{"children":[[{"id":"18128"},0,0]]},"id":"18217","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18169","type":"Scatter"},{"attributes":{"coordinates":null,"group":null},"id":"18197","type":"Title"},{"attributes":{"coordinates":null,"data_source":{"id":"18172"},"glyph":{"id":"18173"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18175"},"nonselection_glyph":{"id":"18174"},"view":{"id":"18177"}},"id":"18176","type":"GlyphRenderer"},{"attributes":{},"id":"18148","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18193","type":"Circle"},{"attributes":{},"id":"18199","type":"BasicTickFormatter"},{"attributes":{},"id":"18133","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"18190"},"glyph":{"id":"18191"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18193"},"nonselection_glyph":{"id":"18192"},"view":{"id":"18195"}},"id":"18194","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"18166"},"glyph":{"id":"18167"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18169"},"nonselection_glyph":{"id":"18168"},"view":{"id":"18171"}},"id":"18170","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18173","type":"MultiLine"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18185","type":"MultiLine"},{"attributes":{},"id":"18209","type":"Selection"},{"attributes":{"source":{"id":"18184"}},"id":"18189","type":"CDSView"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18154","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"18141"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18144","type":"Grid"},{"attributes":{"toolbars":[{"id":"18155"}],"tools":[{"id":"18145"},{"id":"18146"},{"id":"18147"},{"id":"18148"},{"id":"18149"},{"id":"18150"},{"id":"18151"},{"id":"18152"}]},"id":"18218","type":"ProxyToolbar"},{"attributes":{},"id":"18210","type":"UnionRenderers"},{"attributes":{},"id":"18204","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18168","type":"Scatter"},{"attributes":{"overlay":{"id":"18153"}},"id":"18147","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18213"},"selection_policy":{"id":"18212"}},"id":"18190","type":"ColumnDataSource"},{"attributes":{},"id":"18211","type":"Selection"},{"attributes":{"tools":[{"id":"18145"},{"id":"18146"},{"id":"18147"},{"id":"18148"},{"id":"18149"},{"id":"18150"},{"id":"18151"},{"id":"18152"}]},"id":"18155","type":"Toolbar"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18211"},"selection_policy":{"id":"18210"}},"id":"18184","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18178"}},"id":"18183","type":"CDSView"},{"attributes":{},"id":"18205","type":"Selection"},{"attributes":{},"id":"18151","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18209"},"selection_policy":{"id":"18208"}},"id":"18178","type":"ColumnDataSource"},{"attributes":{},"id":"18200","type":"AllLabels"},{"attributes":{"children":[{"id":"18219"},{"id":"18217"}]},"id":"18220","type":"Column"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"18196","type":"Span"},{"attributes":{"toolbar":{"id":"18218"},"toolbar_location":"above"},"id":"18219","type":"ToolbarBox"},{"attributes":{"below":[{"id":"18137"}],"center":[{"id":"18140"},{"id":"18144"}],"height":500,"left":[{"id":"18141"}],"output_backend":"webgl","renderers":[{"id":"18170"},{"id":"18176"},{"id":"18182"},{"id":"18188"},{"id":"18194"},{"id":"18196"}],"title":{"id":"18197"},"toolbar":{"id":"18155"},"toolbar_location":null,"width":500,"x_range":{"id":"18129"},"x_scale":{"id":"18133"},"y_range":{"id":"18131"},"y_scale":{"id":"18135"}},"id":"18128","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18213","type":"Selection"},{"attributes":{},"id":"18206","type":"UnionRenderers"},{"attributes":{},"id":"18202","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18180","type":"Circle"},{"attributes":{},"id":"18145","type":"ResetTool"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18202"},"group":null,"major_label_policy":{"id":"18203"},"ticker":{"id":"18138"}},"id":"18137","type":"LinearAxis"},{"attributes":{},"id":"18129","type":"DataRange1d"},{"attributes":{"overlay":{"id":"18154"}},"id":"18149","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18181","type":"Circle"},{"attributes":{},"id":"18150","type":"UndoTool"},{"attributes":{},"id":"18207","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"18184"},"glyph":{"id":"18185"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18187"},"nonselection_glyph":{"id":"18186"},"view":{"id":"18189"}},"id":"18188","type":"GlyphRenderer"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18164","type":"FixedTicker"},{"attributes":{},"id":"18146","type":"PanTool"},{"attributes":{},"id":"18208","type":"UnionRenderers"},{"attributes":{},"id":"18138","type":"BasicTicker"},{"attributes":{"end":0.5,"start":-1.5},"id":"18131","type":"DataRange1d"}],"root_ids":["18220"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"606ca4c6-9cdc-4112-8ee0-10b6eb6894e1","root_ids":["18220"],"roots":{"18220":"6b979fc1-62eb-4081-bc9d-42c41b668e33"}}];
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