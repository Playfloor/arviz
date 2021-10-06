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
    
      
      
    
      const element = document.getElementById("e9ec645f-2b72-4dc0-85a8-2c1142674642");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e9ec645f-2b72-4dc0-85a8-2c1142674642' but no matching script tag was found.")
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
                    
                  const docs_json = '{"66cc5071-fd55-43f1-9b33-2e2b2e1ca92b":{"defs":[],"roots":{"references":[{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"21548"},"selection_policy":{"id":"21547"}},"id":"21476","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"21466","type":"Circle"},{"attributes":{},"id":"21505","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"21422"},"glyph":{"id":"21423"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21425"},"nonselection_glyph":{"id":"21424"},"view":{"id":"21427"}},"id":"21426","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"21508"},"selection_policy":{"id":"21507"}},"id":"21356","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"21411","type":"Circle"},{"attributes":{},"id":"21533","type":"UnionRenderers"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21353","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21441","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"21362"},"glyph":{"id":"21363"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21365"},"nonselection_glyph":{"id":"21364"},"view":{"id":"21367"}},"id":"21366","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21405","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"21467","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"21413","type":"Circle"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"21536"},"selection_policy":{"id":"21535"}},"id":"21440","type":"ColumnDataSource"},{"attributes":{},"id":"21527","type":"UnionRenderers"},{"attributes":{"source":{"id":"21410"}},"id":"21415","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"21447","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"21380"},"glyph":{"id":"21381"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21383"},"nonselection_glyph":{"id":"21382"},"view":{"id":"21385"}},"id":"21384","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"21470"},"glyph":{"id":"21471"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21473"},"nonselection_glyph":{"id":"21472"},"view":{"id":"21475"}},"id":"21474","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"21504"},"selection_policy":{"id":"21503"}},"id":"21344","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"21530"},"selection_policy":{"id":"21529"}},"id":"21422","type":"ColumnDataSource"},{"attributes":{},"id":"21518","type":"Selection"},{"attributes":{"source":{"id":"21362"}},"id":"21367","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"21449","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"21356"},"glyph":{"id":"21357"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21359"},"nonselection_glyph":{"id":"21358"},"view":{"id":"21361"}},"id":"21360","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21434"}},"id":"21439","type":"CDSView"},{"attributes":{},"id":"21315","type":"LinearScale"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"21546"},"selection_policy":{"id":"21545"}},"id":"21470","type":"ColumnDataSource"},{"attributes":{},"id":"21534","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21424","type":"Line"},{"attributes":{"source":{"id":"21470"}},"id":"21475","type":"CDSView"},{"attributes":{"children":[{"id":"21556"},{"id":"21554"}]},"id":"21557","type":"Column"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21363","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"21429","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"text":"94.0% HDI"},"id":"21488","type":"Title"},{"attributes":{},"id":"21313","type":"LinearScale"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"21495"},{"id":"21496"}],"location":"top_left"},"id":"21494","type":"Legend"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"21512"},"selection_policy":{"id":"21511"}},"id":"21368","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21404"}},"id":"21409","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"21465","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21364","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21443","type":"Line"},{"attributes":{},"id":"21523","type":"UnionRenderers"},{"attributes":{"source":{"id":"21356"}},"id":"21361","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"21359","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21454","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"21452"},"glyph":{"id":"21453"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21455"},"nonselection_glyph":{"id":"21454"},"view":{"id":"21457"}},"id":"21456","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21365","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"21412","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21423","type":"Line"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"21510"},"selection_policy":{"id":"21509"}},"id":"21362","type":"ColumnDataSource"},{"attributes":{},"id":"21543","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"21368"},"glyph":{"id":"21369"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21371"},"nonselection_glyph":{"id":"21370"},"view":{"id":"21373"}},"id":"21372","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21471","type":"Line"},{"attributes":{"coordinates":null,"formatter":{"id":"21501"},"group":null,"major_label_policy":{"id":"21502"},"ticker":{"id":"21318"}},"id":"21317","type":"LinearAxis"},{"attributes":{"source":{"id":"21446"}},"id":"21451","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21460","type":"Line"},{"attributes":{},"id":"21328","type":"WheelZoomTool"},{"attributes":{},"id":"21515","type":"UnionRenderers"},{"attributes":{"source":{"id":"21422"}},"id":"21427","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"21476"},"glyph":{"id":"21477"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21479"},"nonselection_glyph":{"id":"21478"},"view":{"id":"21481"}},"id":"21480","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"21325"},{"id":"21326"},{"id":"21327"},{"id":"21328"},{"id":"21329"},{"id":"21330"},{"id":"21331"},{"id":"21332"}]},"id":"21335","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"21434"},"glyph":{"id":"21435"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21437"},"nonselection_glyph":{"id":"21436"},"view":{"id":"21439"}},"id":"21438","type":"GlyphRenderer"},{"attributes":{"ticks":[1.275]},"id":"21492","type":"FixedTicker"},{"attributes":{"axis":{"id":"21321"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"21324","type":"Grid"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21461","type":"Line"},{"attributes":{},"id":"21541","type":"UnionRenderers"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21419","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21473","type":"Line"},{"attributes":{},"id":"21536","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"21428"},"glyph":{"id":"21429"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21431"},"nonselection_glyph":{"id":"21430"},"view":{"id":"21433"}},"id":"21432","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"21542"},"selection_policy":{"id":"21541"}},"id":"21458","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"21334"}},"id":"21329","type":"LassoSelectTool"},{"attributes":{"data":{},"selected":{"id":"21526"},"selection_policy":{"id":"21525"}},"id":"21410","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21425","type":"Line"},{"attributes":{"callback":null},"id":"21332","type":"HoverTool"},{"attributes":{"data":{},"selected":{"id":"21532"},"selection_policy":{"id":"21531"}},"id":"21428","type":"ColumnDataSource"},{"attributes":{},"id":"21529","type":"UnionRenderers"},{"attributes":{"source":{"id":"21344"}},"id":"21349","type":"CDSView"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"21524"},"selection_policy":{"id":"21523"}},"id":"21404","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"21522"},"selection_policy":{"id":"21521"}},"id":"21398","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21479","type":"Line"},{"attributes":{},"id":"21517","type":"UnionRenderers"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21407","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"21431","type":"Circle"},{"attributes":{},"id":"21318","type":"BasicTicker"},{"attributes":{},"id":"21531","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"21358","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21453","type":"Line"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21334","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"formatter":{"id":"21498"},"group":null,"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"21499"},"ticker":{"id":"21492"}},"id":"21321","type":"LinearAxis"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21435","type":"Line"},{"attributes":{},"id":"21331","type":"SaveTool"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21351","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21478","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"21410"},"glyph":{"id":"21411"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21413"},"nonselection_glyph":{"id":"21412"},"view":{"id":"21415"}},"id":"21414","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"21317"},"coordinates":null,"group":null,"ticker":null},"id":"21320","type":"Grid"},{"attributes":{"source":{"id":"21458"}},"id":"21463","type":"CDSView"},{"attributes":{"bounds":"auto","min_interval":1},"id":"21490","type":"DataRange1d"},{"attributes":{},"id":"21506","type":"Selection"},{"attributes":{},"id":"21521","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21333","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21406","type":"Line"},{"attributes":{},"id":"21532","type":"Selection"},{"attributes":{},"id":"21326","type":"PanTool"},{"attributes":{"data":{},"selected":{"id":"21538"},"selection_policy":{"id":"21537"}},"id":"21446","type":"ColumnDataSource"},{"attributes":{},"id":"21504","type":"Selection"},{"attributes":{"source":{"id":"21416"}},"id":"21421","type":"CDSView"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"21540"},"selection_policy":{"id":"21539"}},"id":"21452","type":"ColumnDataSource"},{"attributes":{},"id":"21503","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"21544"},"selection_policy":{"id":"21543"}},"id":"21464","type":"ColumnDataSource"},{"attributes":{},"id":"21519","type":"UnionRenderers"},{"attributes":{},"id":"21549","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21418","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21455","type":"Line"},{"attributes":{},"id":"21516","type":"Selection"},{"attributes":{},"id":"21330","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21404"},"glyph":{"id":"21405"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21407"},"nonselection_glyph":{"id":"21406"},"view":{"id":"21409"}},"id":"21408","type":"GlyphRenderer"},{"attributes":{},"id":"21548","type":"Selection"},{"attributes":{"overlay":{"id":"21333"}},"id":"21327","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21440"},"glyph":{"id":"21441"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21443"},"nonselection_glyph":{"id":"21442"},"view":{"id":"21445"}},"id":"21444","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"21458"},"glyph":{"id":"21459"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21461"},"nonselection_glyph":{"id":"21460"},"view":{"id":"21463"}},"id":"21462","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21398"}},"id":"21403","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"21344"},"glyph":{"id":"21345"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21347"},"nonselection_glyph":{"id":"21346"},"view":{"id":"21349"}},"id":"21348","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21350"}},"id":"21355","type":"CDSView"},{"attributes":{"source":{"id":"21428"}},"id":"21433","type":"CDSView"},{"attributes":{"toolbar":{"id":"21555"},"toolbar_location":"above"},"id":"21556","type":"ToolbarBox"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21442","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21477","type":"Line"},{"attributes":{},"id":"21535","type":"UnionRenderers"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21437","type":"Line"},{"attributes":{"source":{"id":"21464"}},"id":"21469","type":"CDSView"},{"attributes":{},"id":"21520","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"21430","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21417","type":"Line"},{"attributes":{"source":{"id":"21452"}},"id":"21457","type":"CDSView"},{"attributes":{},"id":"21522","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21459","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"21448","type":"Circle"},{"attributes":{},"id":"21524","type":"Selection"},{"attributes":{"source":{"id":"21440"}},"id":"21445","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"21464"},"glyph":{"id":"21465"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21467"},"nonselection_glyph":{"id":"21466"},"view":{"id":"21469"}},"id":"21468","type":"GlyphRenderer"},{"attributes":{},"id":"21550","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"21446"},"glyph":{"id":"21447"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21449"},"nonselection_glyph":{"id":"21448"},"view":{"id":"21451"}},"id":"21450","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21401","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21347","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21388","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21400","type":"Line"},{"attributes":{},"id":"21530","type":"Selection"},{"attributes":{},"id":"21542","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"21357","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21472","type":"Line"},{"attributes":{},"id":"21547","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21352","type":"Line"},{"attributes":{},"id":"21325","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21436","type":"Line"},{"attributes":{},"id":"21528","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"21398"},"glyph":{"id":"21399"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21401"},"nonselection_glyph":{"id":"21400"},"view":{"id":"21403"}},"id":"21402","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21399","type":"Line"},{"attributes":{},"id":"21510","type":"Selection"},{"attributes":{},"id":"21537","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"21376","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"21484","type":"Circle"},{"attributes":{},"id":"21513","type":"UnionRenderers"},{"attributes":{},"id":"21509","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"21393","type":"Circle"},{"attributes":{},"id":"21511","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"21335"}],"tools":[{"id":"21325"},{"id":"21326"},{"id":"21327"},{"id":"21328"},{"id":"21329"},{"id":"21330"},{"id":"21331"},{"id":"21332"}]},"id":"21555","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21346","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21389","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21345","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21387","type":"Line"},{"attributes":{"data":{},"selected":{"id":"21520"},"selection_policy":{"id":"21519"}},"id":"21392","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"21348"},{"id":"21354"},{"id":"21360"},{"id":"21366"},{"id":"21372"},{"id":"21378"},{"id":"21384"},{"id":"21390"},{"id":"21396"},{"id":"21402"},{"id":"21408"},{"id":"21414"}]},"id":"21495","type":"LegendItem"},{"attributes":{"source":{"id":"21482"}},"id":"21487","type":"CDSView"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"21528"},"selection_policy":{"id":"21527"}},"id":"21416","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"21550"},"selection_policy":{"id":"21549"}},"id":"21482","type":"ColumnDataSource"},{"attributes":{},"id":"21526","type":"Selection"},{"attributes":{},"id":"21502","type":"AllLabels"},{"attributes":{},"id":"21508","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"21392"},"glyph":{"id":"21393"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21395"},"nonselection_glyph":{"id":"21394"},"view":{"id":"21397"}},"id":"21396","type":"GlyphRenderer"},{"attributes":{},"id":"21514","type":"Selection"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"21516"},"selection_policy":{"id":"21515"}},"id":"21380","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"21534"},"selection_policy":{"id":"21533"}},"id":"21434","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"21395","type":"Circle"},{"attributes":{"source":{"id":"21380"}},"id":"21385","type":"CDSView"},{"attributes":{},"id":"21545","type":"UnionRenderers"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"21420"},{"id":"21426"},{"id":"21432"},{"id":"21438"},{"id":"21444"},{"id":"21450"},{"id":"21456"},{"id":"21462"},{"id":"21468"},{"id":"21474"},{"id":"21480"},{"id":"21486"}]},"id":"21496","type":"LegendItem"},{"attributes":{},"id":"21507","type":"UnionRenderers"},{"attributes":{"source":{"id":"21476"}},"id":"21481","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"21394","type":"Circle"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"21518"},"selection_policy":{"id":"21517"}},"id":"21386","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"21308"},0,0]]},"id":"21554","type":"GridBox"},{"attributes":{"coordinates":null,"data_source":{"id":"21374"},"glyph":{"id":"21375"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21377"},"nonselection_glyph":{"id":"21376"},"view":{"id":"21379"}},"id":"21378","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21369","type":"Line"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"21506"},"selection_policy":{"id":"21505"}},"id":"21350","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21381","type":"Line"},{"attributes":{"source":{"id":"21368"}},"id":"21373","type":"CDSView"},{"attributes":{},"id":"21525","type":"UnionRenderers"},{"attributes":{"above":[{"id":"21494"}],"below":[{"id":"21317"}],"center":[{"id":"21320"},{"id":"21324"}],"height":348,"left":[{"id":"21321"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"21348"},{"id":"21354"},{"id":"21360"},{"id":"21366"},{"id":"21372"},{"id":"21378"},{"id":"21384"},{"id":"21390"},{"id":"21396"},{"id":"21402"},{"id":"21408"},{"id":"21414"},{"id":"21420"},{"id":"21426"},{"id":"21432"},{"id":"21438"},{"id":"21444"},{"id":"21450"},{"id":"21456"},{"id":"21462"},{"id":"21468"},{"id":"21474"},{"id":"21480"},{"id":"21486"}],"title":{"id":"21488"},"toolbar":{"id":"21335"},"toolbar_location":null,"width":450,"x_range":{"id":"21490"},"x_scale":{"id":"21313"},"y_range":{"id":"21491"},"y_scale":{"id":"21315"}},"id":"21308","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"21386"}},"id":"21391","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"21350"},"glyph":{"id":"21351"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21353"},"nonselection_glyph":{"id":"21352"},"view":{"id":"21355"}},"id":"21354","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"21514"},"selection_policy":{"id":"21513"}},"id":"21374","type":"ColumnDataSource"},{"attributes":{},"id":"21538","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21370","type":"Line"},{"attributes":{},"id":"21539","type":"UnionRenderers"},{"attributes":{},"id":"21499","type":"AllLabels"},{"attributes":{},"id":"21544","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21382","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"21485","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"21386"},"glyph":{"id":"21387"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21389"},"nonselection_glyph":{"id":"21388"},"view":{"id":"21391"}},"id":"21390","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"21416"},"glyph":{"id":"21417"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21419"},"nonselection_glyph":{"id":"21418"},"view":{"id":"21421"}},"id":"21420","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"21377","type":"Circle"},{"attributes":{},"id":"21501","type":"BasicTickFormatter"},{"attributes":{},"id":"21512","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"21375","type":"Circle"},{"attributes":{},"id":"21540","type":"Selection"},{"attributes":{},"id":"21546","type":"Selection"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"21491","type":"DataRange1d"},{"attributes":{},"id":"21498","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"21482"},"glyph":{"id":"21483"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21485"},"nonselection_glyph":{"id":"21484"},"view":{"id":"21487"}},"id":"21486","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21383","type":"Line"},{"attributes":{"source":{"id":"21374"}},"id":"21379","type":"CDSView"},{"attributes":{"source":{"id":"21392"}},"id":"21397","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21371","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"21483","type":"Circle"}],"root_ids":["21557"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"66cc5071-fd55-43f1-9b33-2e2b2e1ca92b","root_ids":["21557"],"roots":{"21557":"e9ec645f-2b72-4dc0-85a8-2c1142674642"}}];
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