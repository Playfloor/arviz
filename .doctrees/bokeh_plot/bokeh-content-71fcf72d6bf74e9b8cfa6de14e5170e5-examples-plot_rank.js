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
    
      
      
    
      const element = document.getElementById("a0c531f2-cd93-4253-b138-19a827a46129");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a0c531f2-cd93-4253-b138-19a827a46129' but no matching script tag was found.")
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
                    
                  const docs_json = '{"6c918f9e-7002-4c06-8336-35aba9895cad":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"48129"}},"id":"48134","type":"CDSView"},{"attributes":{},"id":"48046","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"48168"},"glyph":{"id":"48169"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48171"},"nonselection_glyph":{"id":"48170"},"view":{"id":"48173"}},"id":"48172","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48197"},"group":null,"major_label_policy":{"id":"48198"},"ticker":{"id":"48175"}},"id":"48092","type":"LinearAxis"},{"attributes":{},"id":"48050","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48190"},"selection_policy":{"id":"48189"}},"id":"48129","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48131","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48129"},"glyph":{"id":"48130"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48132"},"nonselection_glyph":{"id":"48131"},"view":{"id":"48134"}},"id":"48133","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48200"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48201"},"ticker":{"id":"48089"}},"id":"48088","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48170","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48137","type":"VBar"},{"attributes":{"children":[[{"id":"48045"},0,0],[{"id":"48081"},0,1]]},"id":"48213","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48142","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48209"},"selection_policy":{"id":"48208"}},"id":"48168","type":"ColumnDataSource"},{"attributes":{},"id":"48084","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48132","type":"VBar"},{"attributes":{"source":{"id":"48168"}},"id":"48173","type":"CDSView"},{"attributes":{"callback":null},"id":"48103","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48121","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48138","type":"VBar"},{"attributes":{"source":{"id":"48136"}},"id":"48141","type":"CDSView"},{"attributes":{"axis":{"id":"48088"},"coordinates":null,"group":null,"ticker":null},"id":"48091","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48192"},"selection_policy":{"id":"48191"}},"id":"48136","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48136"},"glyph":{"id":"48137"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48139"},"nonselection_glyph":{"id":"48138"},"view":{"id":"48141"}},"id":"48140","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48105","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48148","type":"VBar"},{"attributes":{"axis":{"id":"48092"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48095","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48139","type":"VBar"},{"attributes":{"toolbars":[{"id":"48072"},{"id":"48106"}],"tools":[{"id":"48062"},{"id":"48063"},{"id":"48064"},{"id":"48065"},{"id":"48066"},{"id":"48067"},{"id":"48068"},{"id":"48069"},{"id":"48096"},{"id":"48097"},{"id":"48098"},{"id":"48099"},{"id":"48100"},{"id":"48101"},{"id":"48102"},{"id":"48103"}]},"id":"48214","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48177","type":"Title"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48116","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48169","type":"VBar"},{"attributes":{"overlay":{"id":"48104"}},"id":"48098","type":"BoxZoomTool"},{"attributes":{},"id":"48097","type":"PanTool"},{"attributes":{"source":{"id":"48154"}},"id":"48159","type":"CDSView"},{"attributes":{},"id":"48096","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48149","type":"VBar"},{"attributes":{},"id":"48102","type":"SaveTool"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48203"},"selection_policy":{"id":"48202"}},"id":"48147","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"48214"},"toolbar_location":"above"},"id":"48215","type":"ToolbarBox"},{"attributes":{},"id":"48099","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"48105"}},"id":"48100","type":"LassoSelectTool"},{"attributes":{},"id":"48101","type":"UndoTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"48175","type":"FixedTicker"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48128","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48150","type":"VBar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48104","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48171","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48160","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48153","type":"Span"},{"attributes":{"source":{"id":"48147"}},"id":"48152","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48147"},"glyph":{"id":"48148"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48150"},"nonselection_glyph":{"id":"48149"},"view":{"id":"48152"}},"id":"48151","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"48054"}],"center":[{"id":"48057"},{"id":"48061"},{"id":"48121"},{"id":"48128"},{"id":"48135"},{"id":"48142"}],"height":331,"left":[{"id":"48058"}],"output_backend":"webgl","renderers":[{"id":"48119"},{"id":"48126"},{"id":"48133"},{"id":"48140"}],"title":{"id":"48145"},"toolbar":{"id":"48072"},"toolbar_location":null,"width":496,"x_range":{"id":"48046"},"x_scale":{"id":"48050"},"y_range":{"id":"48048"},"y_scale":{"id":"48052"}},"id":"48045","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"48088"}],"center":[{"id":"48091"},{"id":"48095"},{"id":"48153"},{"id":"48160"},{"id":"48167"},{"id":"48174"}],"height":331,"left":[{"id":"48092"}],"output_backend":"webgl","renderers":[{"id":"48151"},{"id":"48158"},{"id":"48165"},{"id":"48172"}],"title":{"id":"48177"},"toolbar":{"id":"48106"},"toolbar_location":null,"width":496,"x_range":{"id":"48046"},"x_scale":{"id":"48084"},"y_range":{"id":"48048"},"y_scale":{"id":"48086"}},"id":"48081","subtype":"Figure","type":"Plot"},{"attributes":{"ticks":[0,1,2,3]},"id":"48143","type":"FixedTicker"},{"attributes":{},"id":"48180","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"48154"},"glyph":{"id":"48155"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48157"},"nonselection_glyph":{"id":"48156"},"view":{"id":"48159"}},"id":"48158","type":"GlyphRenderer"},{"attributes":{},"id":"48048","type":"DataRange1d"},{"attributes":{},"id":"48181","type":"AllLabels"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48130","type":"VBar"},{"attributes":{},"id":"48183","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48117","type":"VBar"},{"attributes":{},"id":"48052","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"48115"},"glyph":{"id":"48116"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48118"},"nonselection_glyph":{"id":"48117"},"view":{"id":"48120"}},"id":"48119","type":"GlyphRenderer"},{"attributes":{},"id":"48184","type":"AllLabels"},{"attributes":{"tools":[{"id":"48096"},{"id":"48097"},{"id":"48098"},{"id":"48099"},{"id":"48100"},{"id":"48101"},{"id":"48102"},{"id":"48103"}]},"id":"48106","type":"Toolbar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48207"},"selection_policy":{"id":"48206"}},"id":"48161","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48163","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48164","type":"VBar"},{"attributes":{"source":{"id":"48122"}},"id":"48127","type":"CDSView"},{"attributes":{"source":{"id":"48161"}},"id":"48166","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48174","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48186"},"selection_policy":{"id":"48185"}},"id":"48115","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48124","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48167","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48118","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48188"},"selection_policy":{"id":"48187"}},"id":"48122","type":"ColumnDataSource"},{"attributes":{"source":{"id":"48115"}},"id":"48120","type":"CDSView"},{"attributes":{},"id":"48089","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"48161"},"glyph":{"id":"48162"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48164"},"nonselection_glyph":{"id":"48163"},"view":{"id":"48166"}},"id":"48165","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48135","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48123","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48125","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48122"},"glyph":{"id":"48123"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48125"},"nonselection_glyph":{"id":"48124"},"view":{"id":"48127"}},"id":"48126","type":"GlyphRenderer"},{"attributes":{},"id":"48197","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48215"},{"id":"48213"}]},"id":"48216","type":"Column"},{"attributes":{},"id":"48198","type":"AllLabels"},{"attributes":{},"id":"48185","type":"UnionRenderers"},{"attributes":{},"id":"48067","type":"UndoTool"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48183"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48184"},"ticker":{"id":"48055"}},"id":"48054","type":"LinearAxis"},{"attributes":{},"id":"48200","type":"BasicTickFormatter"},{"attributes":{},"id":"48186","type":"Selection"},{"attributes":{},"id":"48201","type":"AllLabels"},{"attributes":{},"id":"48055","type":"BasicTicker"},{"attributes":{},"id":"48208","type":"UnionRenderers"},{"attributes":{},"id":"48063","type":"PanTool"},{"attributes":{},"id":"48209","type":"Selection"},{"attributes":{},"id":"48068","type":"SaveTool"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48180"},"group":null,"major_label_policy":{"id":"48181"},"ticker":{"id":"48143"}},"id":"48058","type":"LinearAxis"},{"attributes":{},"id":"48065","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48157","type":"VBar"},{"attributes":{},"id":"48187","type":"UnionRenderers"},{"attributes":{},"id":"48086","type":"LinearScale"},{"attributes":{},"id":"48188","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48155","type":"VBar"},{"attributes":{},"id":"48202","type":"UnionRenderers"},{"attributes":{},"id":"48203","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48145","type":"Title"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48156","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48205"},"selection_policy":{"id":"48204"}},"id":"48154","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48071","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48162","type":"VBar"},{"attributes":{"axis":{"id":"48058"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48061","type":"Grid"},{"attributes":{},"id":"48189","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48070","type":"BoxAnnotation"},{"attributes":{},"id":"48190","type":"Selection"},{"attributes":{"callback":null},"id":"48069","type":"HoverTool"},{"attributes":{"overlay":{"id":"48070"}},"id":"48064","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"48054"},"coordinates":null,"group":null,"ticker":null},"id":"48057","type":"Grid"},{"attributes":{"overlay":{"id":"48071"}},"id":"48066","type":"LassoSelectTool"},{"attributes":{},"id":"48204","type":"UnionRenderers"},{"attributes":{},"id":"48062","type":"ResetTool"},{"attributes":{},"id":"48205","type":"Selection"},{"attributes":{},"id":"48191","type":"UnionRenderers"},{"attributes":{},"id":"48192","type":"Selection"},{"attributes":{"tools":[{"id":"48062"},{"id":"48063"},{"id":"48064"},{"id":"48065"},{"id":"48066"},{"id":"48067"},{"id":"48068"},{"id":"48069"}]},"id":"48072","type":"Toolbar"},{"attributes":{},"id":"48206","type":"UnionRenderers"},{"attributes":{},"id":"48207","type":"Selection"}],"root_ids":["48216"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"6c918f9e-7002-4c06-8336-35aba9895cad","root_ids":["48216"],"roots":{"48216":"a0c531f2-cd93-4253-b138-19a827a46129"}}];
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