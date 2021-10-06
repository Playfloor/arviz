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
    
      
      
    
      const element = document.getElementById("7c3a9038-e574-4e80-a704-2e6f6cd6b3de");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7c3a9038-e574-4e80-a704-2e6f6cd6b3de' but no matching script tag was found.")
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
                    
                  const docs_json = '{"5cb85195-f620-43cd-ba78-fa81bfc8a508":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41870","type":"Span"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41898"},"group":null,"major_label_policy":{"id":"41899"},"ticker":{"id":"41823"}},"id":"41822","type":"LinearAxis"},{"attributes":{"overlay":{"id":"41803"}},"id":"41798","type":"LassoSelectTool"},{"attributes":{"source":{"id":"41864"}},"id":"41869","type":"CDSView"},{"attributes":{"source":{"id":"41874"}},"id":"41876","type":"CDSView"},{"attributes":{"end":1,"start":-0.05},"id":"41816","type":"DataRange1d"},{"attributes":{"axis":{"id":"41790"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41793","type":"Grid"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41873","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41871","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41895"},"group":null,"major_label_policy":{"id":"41896"},"ticker":{"id":"41827"}},"id":"41826","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41877","type":"Title"},{"attributes":{"toolbars":[{"id":"41804"},{"id":"41840"}],"tools":[{"id":"41794"},{"id":"41795"},{"id":"41796"},{"id":"41797"},{"id":"41798"},{"id":"41799"},{"id":"41800"},{"id":"41801"},{"id":"41830"},{"id":"41831"},{"id":"41832"},{"id":"41833"},{"id":"41834"},{"id":"41835"},{"id":"41836"},{"id":"41837"}]},"id":"41908","type":"ProxyToolbar"},{"attributes":{},"id":"41818","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41872","type":"Span"},{"attributes":{},"id":"41835","type":"UndoTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41903"},"selection_policy":{"id":"41902"}},"id":"41874","type":"ColumnDataSource"},{"attributes":{},"id":"41888","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"41864"},"glyph":{"id":"41865"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41867"},"nonselection_glyph":{"id":"41866"},"view":{"id":"41869"}},"id":"41868","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"41874"},"glyph":{"id":"41873"},"group":null,"hover_glyph":null,"view":{"id":"41876"}},"id":"41875","type":"GlyphRenderer"},{"attributes":{},"id":"41799","type":"UndoTool"},{"attributes":{},"id":"41820","type":"LinearScale"},{"attributes":{},"id":"41889","type":"Selection"},{"attributes":{"callback":null},"id":"41837","type":"HoverTool"},{"attributes":{"toolbar":{"id":"41908"},"toolbar_location":"above"},"id":"41909","type":"ToolbarBox"},{"attributes":{},"id":"41823","type":"BasicTicker"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41881"},"group":null,"major_label_policy":{"id":"41882"},"ticker":{"id":"41791"}},"id":"41790","type":"LinearAxis"},{"attributes":{"axis":{"id":"41822"},"coordinates":null,"group":null,"ticker":null},"id":"41825","type":"Grid"},{"attributes":{},"id":"41895","type":"BasicTickFormatter"},{"attributes":{},"id":"41814","type":"DataRange1d"},{"attributes":{"axis":{"id":"41826"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41829","type":"Grid"},{"attributes":{},"id":"41896","type":"AllLabels"},{"attributes":{},"id":"41827","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41855","type":"Span"},{"attributes":{"overlay":{"id":"41838"}},"id":"41832","type":"BoxZoomTool"},{"attributes":{},"id":"41898","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"41802"}},"id":"41796","type":"BoxZoomTool"},{"attributes":{},"id":"41831","type":"PanTool"},{"attributes":{},"id":"41830","type":"ResetTool"},{"attributes":{},"id":"41836","type":"SaveTool"},{"attributes":{},"id":"41899","type":"AllLabels"},{"attributes":{},"id":"41833","type":"WheelZoomTool"},{"attributes":{},"id":"41795","type":"PanTool"},{"attributes":{"overlay":{"id":"41839"}},"id":"41834","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"41909"},{"id":"41907"}]},"id":"41910","type":"Column"},{"attributes":{"source":{"id":"41859"}},"id":"41861","type":"CDSView"},{"attributes":{},"id":"41794","type":"ResetTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41838","type":"BoxAnnotation"},{"attributes":{},"id":"41800","type":"SaveTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41839","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41901"},"selection_policy":{"id":"41900"}},"id":"41864","type":"ColumnDataSource"},{"attributes":{},"id":"41900","type":"UnionRenderers"},{"attributes":{},"id":"41797","type":"WheelZoomTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41889"},"selection_policy":{"id":"41888"}},"id":"41859","type":"ColumnDataSource"},{"attributes":{},"id":"41901","type":"Selection"},{"attributes":{"axis":{"id":"41786"},"coordinates":null,"group":null,"ticker":null},"id":"41789","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"41859"},"glyph":{"id":"41858"},"group":null,"hover_glyph":null,"view":{"id":"41861"}},"id":"41860","type":"GlyphRenderer"},{"attributes":{},"id":"41778","type":"DataRange1d"},{"attributes":{"callback":null},"id":"41801","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41857","type":"Span"},{"attributes":{},"id":"41791","type":"BasicTicker"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41884"},"group":null,"major_label_policy":{"id":"41885"},"ticker":{"id":"41787"}},"id":"41786","type":"LinearAxis"},{"attributes":{"tools":[{"id":"41794"},{"id":"41795"},{"id":"41796"},{"id":"41797"},{"id":"41798"},{"id":"41799"},{"id":"41800"},{"id":"41801"}]},"id":"41804","type":"Toolbar"},{"attributes":{"end":1,"start":-0.05},"id":"41780","type":"DataRange1d"},{"attributes":{},"id":"41782","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41802","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41803","type":"PolyAnnotation"},{"attributes":{},"id":"41881","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41852","type":"Circle"},{"attributes":{},"id":"41787","type":"BasicTicker"},{"attributes":{},"id":"41882","type":"AllLabels"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41858","type":"Scatter"},{"attributes":{},"id":"41902","type":"UnionRenderers"},{"attributes":{"source":{"id":"41849"}},"id":"41854","type":"CDSView"},{"attributes":{},"id":"41884","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"41822"}],"center":[{"id":"41825"},{"id":"41829"}],"height":500,"left":[{"id":"41826"}],"output_backend":"webgl","renderers":[{"id":"41868"},{"id":"41870"},{"id":"41871"},{"id":"41872"},{"id":"41875"}],"title":{"id":"41877"},"toolbar":{"id":"41840"},"toolbar_location":null,"width":500,"x_range":{"id":"41814"},"x_scale":{"id":"41818"},"y_range":{"id":"41816"},"y_scale":{"id":"41820"}},"id":"41813","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41851","type":"Circle"},{"attributes":{},"id":"41784","type":"LinearScale"},{"attributes":{},"id":"41903","type":"Selection"},{"attributes":{},"id":"41885","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"41849"},"glyph":{"id":"41850"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41852"},"nonselection_glyph":{"id":"41851"},"view":{"id":"41854"}},"id":"41853","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41887"},"selection_policy":{"id":"41886"}},"id":"41849","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41866","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41856","type":"Span"},{"attributes":{"below":[{"id":"41786"}],"center":[{"id":"41789"},{"id":"41793"}],"height":500,"left":[{"id":"41790"}],"output_backend":"webgl","renderers":[{"id":"41853"},{"id":"41855"},{"id":"41856"},{"id":"41857"},{"id":"41860"}],"title":{"id":"41862"},"toolbar":{"id":"41804"},"toolbar_location":null,"width":500,"x_range":{"id":"41778"},"x_scale":{"id":"41782"},"y_range":{"id":"41780"},"y_scale":{"id":"41784"}},"id":"41777","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41886","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"41830"},{"id":"41831"},{"id":"41832"},{"id":"41833"},{"id":"41834"},{"id":"41835"},{"id":"41836"},{"id":"41837"}]},"id":"41840","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41850","type":"Circle"},{"attributes":{},"id":"41887","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41867","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41862","type":"Title"},{"attributes":{"children":[[{"id":"41777"},0,0],[{"id":"41813"},0,1]]},"id":"41907","type":"GridBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41865","type":"Circle"}],"root_ids":["41910"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"5cb85195-f620-43cd-ba78-fa81bfc8a508","root_ids":["41910"],"roots":{"41910":"7c3a9038-e574-4e80-a704-2e6f6cd6b3de"}}];
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