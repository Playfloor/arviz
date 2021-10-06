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
    
      
      
    
      const element = document.getElementById("07ece135-e509-4747-b0d9-d476f8ee9f6f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '07ece135-e509-4747-b0d9-d476f8ee9f6f' but no matching script tag was found.")
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
                    
                  const docs_json = '{"9a2809ad-8dc5-4385-9af9-73576a17a00c":{"defs":[],"roots":{"references":[{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20517","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20512","type":"Line"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20545"},"selection_policy":{"id":"20544"}},"id":"20516","type":"ColumnDataSource"},{"attributes":{},"id":"20540","type":"BasicTickFormatter"},{"attributes":{},"id":"20496","type":"UndoTool"},{"attributes":{"coordinates":null,"formatter":{"id":"20540"},"group":null,"major_label_policy":{"id":"20541"},"ticker":{"id":"20484"}},"id":"20483","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"20516"},"glyph":{"id":"20517"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20519"},"nonselection_glyph":{"id":"20518"},"view":{"id":"20521"}},"id":"20520","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"20555"},{"id":"20553"}]},"id":"20556","type":"Column"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20543"},"selection_policy":{"id":"20542"}},"id":"20510","type":"ColumnDataSource"},{"attributes":{},"id":"20544","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20529","type":"Circle"},{"attributes":{},"id":"20481","type":"LinearScale"},{"attributes":{},"id":"20488","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20549"},"selection_policy":{"id":"20548"}},"id":"20528","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20522"}},"id":"20527","type":"CDSView"},{"attributes":{},"id":"20537","type":"BasicTickFormatter"},{"attributes":{},"id":"20541","type":"AllLabels"},{"attributes":{},"id":"20546","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"20528"},"glyph":{"id":"20529"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20531"},"nonselection_glyph":{"id":"20530"},"view":{"id":"20533"}},"id":"20532","type":"GlyphRenderer"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20511","type":"Line"},{"attributes":{},"id":"20479","type":"LinearScale"},{"attributes":{"toolbar":{"id":"20554"},"toolbar_location":"above"},"id":"20555","type":"ToolbarBox"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20518","type":"Line"},{"attributes":{},"id":"20538","type":"AllLabels"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20500","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20519","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20525","type":"Circle"},{"attributes":{"coordinates":null,"group":null},"id":"20534","type":"Title"},{"attributes":{},"id":"20484","type":"BasicTicker"},{"attributes":{},"id":"20547","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"20522"},"glyph":{"id":"20523"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20525"},"nonselection_glyph":{"id":"20524"},"view":{"id":"20527"}},"id":"20526","type":"GlyphRenderer"},{"attributes":{},"id":"20549","type":"Selection"},{"attributes":{},"id":"20492","type":"PanTool"},{"attributes":{"axis":{"id":"20483"},"coordinates":null,"group":null,"ticker":null},"id":"20486","type":"Grid"},{"attributes":{"callback":null},"id":"20498","type":"HoverTool"},{"attributes":{"axis":{"id":"20487"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20490","type":"Grid"},{"attributes":{"source":{"id":"20528"}},"id":"20533","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20524","type":"Circle"},{"attributes":{},"id":"20543","type":"Selection"},{"attributes":{},"id":"20477","type":"DataRange1d"},{"attributes":{"overlay":{"id":"20499"}},"id":"20493","type":"BoxZoomTool"},{"attributes":{"data":{},"selected":{"id":"20547"},"selection_policy":{"id":"20546"}},"id":"20522","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20499","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20530","type":"Circle"},{"attributes":{"source":{"id":"20510"}},"id":"20515","type":"CDSView"},{"attributes":{},"id":"20494","type":"WheelZoomTool"},{"attributes":{},"id":"20548","type":"UnionRenderers"},{"attributes":{},"id":"20497","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20510"},"glyph":{"id":"20511"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20513"},"nonselection_glyph":{"id":"20512"},"view":{"id":"20515"}},"id":"20514","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"20537"},"group":null,"major_label_policy":{"id":"20538"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20488"}},"id":"20487","type":"LinearAxis"},{"attributes":{"source":{"id":"20516"}},"id":"20521","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20531","type":"Circle"},{"attributes":{"below":[{"id":"20483"}],"center":[{"id":"20486"},{"id":"20490"}],"height":360,"left":[{"id":"20487"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20514"},{"id":"20520"},{"id":"20526"},{"id":"20532"}],"title":{"id":"20534"},"toolbar":{"id":"20501"},"toolbar_location":null,"width":720,"x_range":{"id":"20475"},"x_scale":{"id":"20479"},"y_range":{"id":"20477"},"y_scale":{"id":"20481"}},"id":"20474","subtype":"Figure","type":"Plot"},{"attributes":{"tools":[{"id":"20491"},{"id":"20492"},{"id":"20493"},{"id":"20494"},{"id":"20495"},{"id":"20496"},{"id":"20497"},{"id":"20498"}]},"id":"20501","type":"Toolbar"},{"attributes":{"overlay":{"id":"20500"}},"id":"20495","type":"LassoSelectTool"},{"attributes":{"children":[[{"id":"20474"},0,0]]},"id":"20553","type":"GridBox"},{"attributes":{},"id":"20475","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20523","type":"Circle"},{"attributes":{},"id":"20545","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20513","type":"Line"},{"attributes":{},"id":"20542","type":"UnionRenderers"},{"attributes":{},"id":"20491","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"20501"}],"tools":[{"id":"20491"},{"id":"20492"},{"id":"20493"},{"id":"20494"},{"id":"20495"},{"id":"20496"},{"id":"20497"},{"id":"20498"}]},"id":"20554","type":"ProxyToolbar"}],"root_ids":["20556"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"9a2809ad-8dc5-4385-9af9-73576a17a00c","root_ids":["20556"],"roots":{"20556":"07ece135-e509-4747-b0d9-d476f8ee9f6f"}}];
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