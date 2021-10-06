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
    
      
      
    
      const element = document.getElementById("d7d09b26-9eee-4821-ab7a-5ccb389c57d8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd7d09b26-9eee-4821-ab7a-5ccb389c57d8' but no matching script tag was found.")
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
                    
                  const docs_json = '{"e086e17f-a1ca-4481-aac9-64c790963f12":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20944","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21001"},"selection_policy":{"id":"21000"}},"id":"20963","type":"ColumnDataSource"},{"attributes":{},"id":"21003","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"20969"},"glyph":{"id":"20970"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20972"},"nonselection_glyph":{"id":"20971"},"view":{"id":"20974"}},"id":"20973","type":"GlyphRenderer"},{"attributes":{},"id":"20928","type":"DataRange1d"},{"attributes":{},"id":"21002","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20989"},{"id":"20990"}],"location":"center_right","orientation":"horizontal"},"id":"20988","type":"Legend"},{"attributes":{"children":[[{"id":"20927"},0,0]]},"id":"21011","type":"GridBox"},{"attributes":{},"id":"20930","type":"DataRange1d"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20967"},{"id":"20973"}]},"id":"20989","type":"LegendItem"},{"attributes":{},"id":"20932","type":"LinearScale"},{"attributes":{"source":{"id":"20975"}},"id":"20980","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20978","type":"Line"},{"attributes":{},"id":"20937","type":"BasicTicker"},{"attributes":{"tools":[{"id":"20944"},{"id":"20945"},{"id":"20946"},{"id":"20947"},{"id":"20948"},{"id":"20949"},{"id":"20950"},{"id":"20951"}]},"id":"20954","type":"Toolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20953","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20987","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20984","type":"Circle"},{"attributes":{},"id":"21001","type":"Selection"},{"attributes":{"toolbar":{"id":"21012"},"toolbar_location":"above"},"id":"21013","type":"ToolbarBox"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21003"},"selection_policy":{"id":"21002"}},"id":"20969","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"20936"},"coordinates":null,"group":null,"ticker":null},"id":"20939","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20966","type":"Circle"},{"attributes":{},"id":"20996","type":"AllLabels"},{"attributes":{"overlay":{"id":"20953"}},"id":"20948","type":"LassoSelectTool"},{"attributes":{},"id":"21000","type":"UnionRenderers"},{"attributes":{},"id":"20949","type":"UndoTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20970","type":"Line"},{"attributes":{"callback":null},"id":"20951","type":"HoverTool"},{"attributes":{},"id":"20998","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20977","type":"Line"},{"attributes":{"axis":{"id":"20940"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20943","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20964","type":"Circle"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20985"},{"id":"20979"}]},"id":"20990","type":"LegendItem"},{"attributes":{},"id":"21004","type":"UnionRenderers"},{"attributes":{"source":{"id":"20963"}},"id":"20968","type":"CDSView"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20995"},"group":null,"major_label_policy":{"id":"20996"},"ticker":{"id":"20941"}},"id":"20940","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"20954"}],"tools":[{"id":"20944"},{"id":"20945"},{"id":"20946"},{"id":"20947"},{"id":"20948"},{"id":"20949"},{"id":"20950"},{"id":"20951"}]},"id":"21012","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20952","type":"BoxAnnotation"},{"attributes":{},"id":"21007","type":"Selection"},{"attributes":{},"id":"20941","type":"BasicTicker"},{"attributes":{"source":{"id":"20981"}},"id":"20986","type":"CDSView"},{"attributes":{},"id":"20945","type":"PanTool"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20976","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20965","type":"Circle"},{"attributes":{"above":[{"id":"20988"}],"below":[{"id":"20936"}],"center":[{"id":"20939"},{"id":"20943"}],"height":500,"left":[{"id":"20940"}],"output_backend":"webgl","renderers":[{"id":"20967"},{"id":"20973"},{"id":"20979"},{"id":"20985"},{"id":"20987"}],"title":{"id":"20991"},"toolbar":{"id":"20954"},"toolbar_location":null,"width":500,"x_range":{"id":"20928"},"x_scale":{"id":"20932"},"y_range":{"id":"20930"},"y_scale":{"id":"20934"}},"id":"20927","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21005","type":"Selection"},{"attributes":{},"id":"20950","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21007"},"selection_policy":{"id":"21006"}},"id":"20981","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"21013"},{"id":"21011"}]},"id":"21014","type":"Column"},{"attributes":{"source":{"id":"20969"}},"id":"20974","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20991","type":"Title"},{"attributes":{},"id":"20934","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20971","type":"Line"},{"attributes":{},"id":"20947","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20983","type":"Circle"},{"attributes":{"overlay":{"id":"20952"}},"id":"20946","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20982","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20981"},"glyph":{"id":"20982"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20984"},"nonselection_glyph":{"id":"20983"},"view":{"id":"20986"}},"id":"20985","type":"GlyphRenderer"},{"attributes":{},"id":"20995","type":"BasicTickFormatter"},{"attributes":{},"id":"21006","type":"UnionRenderers"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20998"},"group":null,"major_label_policy":{"id":"20999"},"ticker":{"id":"20937"}},"id":"20936","type":"LinearAxis"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20972","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"20963"},"glyph":{"id":"20964"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20966"},"nonselection_glyph":{"id":"20965"},"view":{"id":"20968"}},"id":"20967","type":"GlyphRenderer"},{"attributes":{},"id":"20999","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21005"},"selection_policy":{"id":"21004"}},"id":"20975","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"20975"},"glyph":{"id":"20976"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20978"},"nonselection_glyph":{"id":"20977"},"view":{"id":"20980"}},"id":"20979","type":"GlyphRenderer"}],"root_ids":["21014"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"e086e17f-a1ca-4481-aac9-64c790963f12","root_ids":["21014"],"roots":{"21014":"d7d09b26-9eee-4821-ab7a-5ccb389c57d8"}}];
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