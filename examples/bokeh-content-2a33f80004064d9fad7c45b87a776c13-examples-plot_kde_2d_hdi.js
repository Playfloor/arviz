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
    
      
      
    
      const element = document.getElementById("f3b79cb3-b761-4e2c-bc65-c684850365a5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f3b79cb3-b761-4e2c-bc65-c684850365a5' but no matching script tag was found.")
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
                    
                  const docs_json = '{"84a15978-2637-401a-8ba7-a5d282c77a23":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"formatter":{"id":"23894"},"group":null,"major_label_policy":{"id":"23895"},"ticker":{"id":"23842"}},"id":"23841","type":"LinearAxis"},{"attributes":{"end":6.518761626999987,"start":-3.205128186804048},"id":"23886","type":"Range1d"},{"attributes":{},"id":"23897","type":"Selection"},{"attributes":{"axis":{"id":"23841"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23844","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23870","type":"Patch"},{"attributes":{"children":[{"id":"23907"},{"id":"23905"}]},"id":"23908","type":"Column"},{"attributes":{"axis":{"id":"23845"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23848","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"23868"},"glyph":{"id":"23869"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23871"},"nonselection_glyph":{"id":"23870"},"view":{"id":"23873"}},"id":"23872","type":"GlyphRenderer"},{"attributes":{},"id":"23896","type":"UnionRenderers"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23881","type":"Patch"},{"attributes":{},"id":"23891","type":"BasicTickFormatter"},{"attributes":{},"id":"23899","type":"Selection"},{"attributes":{},"id":"23901","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23858","type":"PolyAnnotation"},{"attributes":{"source":{"id":"23880"}},"id":"23885","type":"CDSView"},{"attributes":{"overlay":{"id":"23857"}},"id":"23851","type":"BoxZoomTool"},{"attributes":{},"id":"23839","type":"LinearScale"},{"attributes":{},"id":"23855","type":"SaveTool"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23877","type":"Patch"},{"attributes":{"end":6.410126181168102,"start":-2.8122872964225767},"id":"23887","type":"Range1d"},{"attributes":{"overlay":{"id":"23858"}},"id":"23853","type":"LassoSelectTool"},{"attributes":{"source":{"id":"23874"}},"id":"23879","type":"CDSView"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23875","type":"Patch"},{"attributes":{},"id":"23850","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[304]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[304]}},"selected":{"id":"23899"},"selection_policy":{"id":"23898"}},"id":"23874","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"IMtG2rfA779y1K0m1P3vv9aAJwBAme+/QFCdlcOC7784nNwHKu3uv54bHtLiNu6/MlPEPFTn7b/6UaCpdHrtv4C0VeqID+2/jSliT6rN7L/eEcO+BBzsv0aCjH2TY+u/wBgOP06c6r9n1AK734Pqv5YKthPA5Om/bvE9LbBH6b8/ksg16GTovwB9xpMTKei/ZyhqkbhS57+9JUPzy+rlv0DhfujYteW/O9iD8q6e5L+ARTc9nkLjvy6mne6wHOO/Chh3Rfqy4b/Aqe+RY8/gv4LblkM7QOC/lB1d1woC3r8AHFDNUbjcv2Db6lVUuNu/F8IfwyU92b945MB23NHXv7YDYpEMG9a/+KwxIGfr0r9hJoWwuHPSv/y1fRZ1/M2/8OpEk+MJzL8EV81JrIDGv/B7Jub4PMK/gbcQeAadu7/gGRByHOCwv2aVlQO2rJ+/ACFmQcfNhT/YYOhBkpyiPyCiaUKOU7Y/5jsupCm5uj8gQFPOsfbEP/d2fqjPVMc/IK9xe5zDzj891+wzguTPP8N+eQztLNM/EA9IlENI1D+U2bEqItjWP5BG1+q4Ltk/igE3Bvug2z8QfmZBLhXeP6Qb7ACky+A/yNr6y9F94T+auzYeW6vjP4h2QncM8eM/3O55Jlkc5j9JEooiR2TmP/C9TeXZmOg/CK7RzYHX6D+OZ/MiQjDrP8hJGXm8Sus/iOVgJPe97T/6ODDJCjbuP6RA1OeYGPA//xY/0Ub28D+IDng9NlLxP2jcG5PTi/I/xXjUrfy98j9Iqr/ocMXzP4igyPDylPQ/KHhjPg7/9D8IRgeUqzj2PwMPlRETY/c/6BOr6Uhy9z/I4U4/5qv4P6iv8pSD5fk/ZhwiSrEt+j+IfZbqIB/7P0RX62+nGPw/aEs6QL5Y/D9IGd6VW5L9P8wv8tZgo/0/KOeB6/jL/j+E2pIgywIAQEkV0xPuOABAdMFky5mfAEBkqDZ2aDwBQJoHHNMJgAFAVI8IITfZAUBEdtrLBXYCQB9Uceo62AJAN12sdtQSA0AmRH4ho68DQBYrUMxxTARABhIid0DpBED2+PMhD4YFQObfxczdIgZA1saXd6y/BkDFSfio58AGQMataSJ7XAdAtpQ7zUn5B0Cmew14GJYIQJZi3yLnMglAhkmxzbXPCUB2MIN4hGwKQGYXVSNTCQtAVv4mziGmC0BI5fh48EIMQDjMyiO/3wxAKLOczo18DUAYmm55XBkOQKV06hrXmw5ACIFAJCu2DkD4ZxLP+VIPQLdefhJqVw9A6E7kecjvD0AB1v72mSMQQOwaW5JLRhBAZA7E57KUEEDQ6k7z5K8QQNwBLT0a4xBAhMf0DlgVEUBU9ZWSgTERQMzo/ufofxFAxsd/QcWmEUBE3Gc9UM4RQLzP0JK3HBJA2FEncyFKEkA0wznoHmsSQDswUQafkBJAW5v+vImsEkCstqI9hrkSQMh5IUQ4ABNAJKoLk+0HE0BExEevgUITQJyddOhUVhNAlP21LHJnE0D+Pm9FFnwTQItJaOwmnBNAFJHdPbykE0Dp4Iqq2NUTQDRG/ViL8RNAjIRGkyPzE0B64S6MugkUQEJGayyeNRRABHiv6IpBFEC4amt3c00UQJDGBgzFTRRAK7x8lI9NFEAG3ao5qkMUQAR4r+iKQRRAVpY1iCE3FEBXfHCoPDgUQAR9V+VYOBRAcsD9kHgvFEDcJzEWkyoUQJyFoqpTGRRANatkFecBFECZ70/bqvMTQIyERpMj8xNACPb1e4rrE0DqJe2wV9ATQNocr3klqxNAFJHdPbykE0C3g6cekI8TQPyTTmQoeRNAVlUZosBeE0CcnXToVFYTQKAHC0+JQxNA7kRygZoYE0AkqguT7QcTQEiZjypy6xJAGCw14aO+EkCstqI9hrkSQCNrQD7PnBJAQoW6FId3EkA0wznoHmsSQGdUQIoRUBJAII9BrA4mEkC8z9CStxwSQGNTZnPB/BFARNxnPVDOEUAWGH8mHsMRQMzo/ufofxFA1bEEgJ5+EUDahahWEU0RQFT1lZKBMRFA8BB/CYsdEUC/d0gMz+oQQNwBLT0a4xBAhvTyfB6wEEBkDsTnspQQQKhbenkMZhBA7BpbkktGEED2FE9VBxkQQOhO5HnI7w9Ar6FpyHurD0D4ZxLP+VIPQJ9NkkJgOw9Aqp5399LODkAIgUAkK7YOQPY6at8+Ow5AGJpueVwZDkAhUJBvU44NQCiznM6NfA1AT7Z28NrkDEA4zMojv98MQF/gM9h9TAxASOX4ePBCDEDjFAl1lbsLQFb+Js4hpgtAZhdVI1MJC0BGewpacAELQHYwg3iEbApAAH9Bh9oWCkCGSbHNtc8JQBUjt10EOAlAlmLfIucyCUCmew14GJYIQA+dPTb4QwhAtpQ7zUn5B0DGrWkie1wHQLfZcTU3SQdA1saXd6y/BkBugrRmLoIGQObfxczdIgZAvJ3efjOsBUD2+PMhD4YFQAYSIndA6QRACjhDsyGSBEAWK1DMcUwEQCZEfiGjrwNAzROQZ7RpA0A2Xax21BIDQMh6zTEHmAJARHbaywV2AkBUjwghN9kBQBrz8ynNYwFAZKg2dmg8AUB0wWTLmZ8AQITakiDLAgBAMaQRV+Xk/j8o54Hr+Mv+P0gZ3pVbkv0/aEs6QL5Y/D+IfZbqIB/7P0JC4H6fffo/qK/ylIPl+T/I4U4/5qv4P+gTq+lIcvc/zsSOBTHW9j8IRgeUqzj2Pyh4Yz4O//Q/SKq/6HDF8z9o3BuT04vyP+47fFzm7/E/iA54PTZS8T+kQNTnmBjwP4jlYCT3ve0/yEkZebxK6z8IrtHNgdfoP0gSiiJHZOY/iHZCdwzx4z/I2vrL0X3hPxB+ZkEuFd4/kEbX6rgu2T+YbAUhCxvVPxAPSJRDSNQ/IK9xe5zDzj8oKVNSCAnGPyBAU86x9sQ/EChGGJPMwz8gomlCjlO2P12BXOQxd6s/ACFmQcfNhT/gGRByHOCwv/B7Jub4PMK/YnA0yHpryb/w6kST4wnMv/isMSBn69K/dLgaDbBU1b945MB23NHXv2eN6vHxHNu/ABxQzVG43L/Aqe+RY8/gv+5Szg1DEOG/gEU3PZ5C478YOaa0XCrkvz/hfujYteW/syF8rQwA5r/gL5qviJfnvwB9xpMTKei/dNDWvij96L/Eut87tvzpv8AYDj9OnOq/oToi8oGq6r9JDOBoc7Xrv2gTnSiynOy/gLRV6ogP7b/mEnf26S3tv0EJ86LRLe6/9obXgkLi7r+ZMSTt/9Duv+S6UoK2du6/uojP6rxO7r+8CSUDuODuv0BQnZXDgu+/IMtG2rfA778gomlCjlO2P29fhg+NVrk/d4aKM1afwT8gQFPOsfbEP1zu+l6HnMk/IK9xe5zDzj8iAfA5P5HRPxAPSJRDSNQ/BvAkHtWg1T+QRtfquC7ZP5N5H14979k/EH5mQS4V3j84XjXtz4bfP8ja+svRfeE/iHZCdwzx4z+SE00YBYTlP0gSiiJHZOY/CK7RzYHX6D/ISRl5vErrP4jlYCT3ve0/pEDU55gY8D+IDng9NlLxP2jcG5PTi/I/SKq/6HDF8z8oeGM+Dv/0PwhGB5SrOPY/6BOr6Uhy9z/I4U4/5qv4P6iv8pSD5fk/iH2W6iAf+z+fpqvjJ9/7P2hLOkC+WPw/SBnelVuS/T8o54Hr+Mv+P3TtM6KJRv8/hNqSIMsCAEB0wWTLmZ8AQBvE5LqL9QBAZKg2dmg8AUBUjwghN9kBQIMzkMUDAwJARHbaywV2AkA2Xax21BIDQAQpFNRQFgNAJkR+IaOvA0AWK1DMcUwEQDKXvNYbVARABhIid0DpBECC1s9QWT0FQPb48yEPhgVAzs9lGaQJBkDl38XM3SIGQNbGl3esvwZA8F8Qb6DJBkDGrWkie1wHQHkbyGENegdAtpQ7zUn5B0CwyD8HoSYIQKZ7DXgYlghANgjiZQLdCECWYt8i5zIJQFLRQ4vajQlAhkmxzbXPCUDqJlzgYScKQHYwg3iEbApA1Iq8zbOyCkBmF1UjUwkLQNWh//uDPgtAVv4mziGmC0Anm1le8sELQIiDHPvANAxASOX4ePBCDED2xnq8waEMQDjMyiO/3wxAz1W2Xz4KDUDMRhCrn3ANQCmznM6NfA1AB3NGwxTQDUAYmm55XBkOQAfzPCOqJw5AjNVyqgp1DkAIgUAkK7YOQCx4gxp+/w5AMtOCgjxMD0D4ZxLP+VIPQELuxCTAjQ9AnCHTwGHBD0A72rlYteoPQOhO5HnI7w9AfR/GqvwNEEAlYfJqSCIQQEufTTGHLxBA5/eUsEk0EEAT5A7WtjMQQK4/5TJKMhBANl3NbtwsEECnwdyHASAQQAac+30IERBAuOJjGloFEEDpTuR5yO8PQC9JcsVA4A9Aul1rnWGiD0B6PriyMGAPQPhnEs/5Ug9AYGxTMNXnDkAIgUAkK7YOQBDRSr5WWw5AGJpueVwZDkBSwbarJsUNQCiznM6NfA1AJ8KzC+MEDUA4zMojv98MQEjl+HjwQgxA1K21Q2fhC0BW/ibOIaYLQGYXVSNTCQtAqtjUNAGtCkB2MIN4hGwKQIZJsc21zwlAlmLfIucyCUCmew14GJYIQLaUO81J+QdAxq1pIntcB0DWxpd3rL8GQObfxczdIgZA9vjzIQ+GBUAGEiJ3QOkEQKzQ/028lwRAFitQzHFMBEAmRH4ho68DQDZdrHbUEgNARHbaywV2AkAqa3BM8wwCQFSPCCE32QFAZKg2dmg8AUB0wWTLmZ8AQEzj5X4SfABAhNqSIMsCAEAo54Hr+Mv+P5/7A+Oxn/0/SBnelVuS/T9oSzpAvlj8P+4xPewxZfs/iX2W6iAf+z+or/KUg+X5P5EeDrAFjfk/yOFOP+ar+D/IpSn8/NP3P+cTq+lIcvc/CEYHlKs49j9a45kfpyD2Pyh4Yz4O//Q/++UDwgpZ9D9Iqr/ocMXzP2P3o3FUrfI/aNwbk9OL8j/MWyJpwFTxP4gOeD02UvE/pEDU55gY8D/cApIAt/TvP4jlYCT3ve0/cny4AnhY7T/ISRl5vErrP3ae6qDR+uo/CK7RzYHX6D90Wme5asroP+rT82y2iOY/SRKKIkdk5j8vYm7+ulTkP4h2QncM8eM/DB5BmXlv4j/I2vrL0X3hP79D6Nsg4+A/NI9JvnnD3j8QfmZBLhXeP4+DVqiLZNs/kEbX6rgu2T8GwhDQxAfYPyeHI5Rs9NQ/EA9IlENI1D/lOCjRKP3RPyCvcXucw84/glfjVGkrzj/XE1syPvPIPyBAU86x9sQ/c4fEMWzixD+4gQEmulDBPyTaI22Iuro/IKJpQo5Ttj+3yrAUSTm0PwEgAWqgHbE/UgsMbGFxrz/vH3Hn28CpP8xfBSVICaM/pqufOkRVnj/7V1stB2mbPw0HPPzqCJg/XeXY7agFlz8wbImgCJKfP1adEkAOaKc/LHvtZRAgsT8gomlCjlO2Pw==","dtype":"float64","order":"little","shape":[515]},"y":{"__ndarray__":"2Ho/LbmE7D+QNo/2mtfuPyZ5718+lfA/rqwysmu38D8EV5dEr77xP+A0Pykg6PI/wBLnDZER9D+c8I7yATv1P9TRRiTg6fU/eM4213Jk9j9UrN674433PzSKhqBUt/g/SPVcROyu+T8QaC6FxeD5P+xF1mk2Cvs/zCN+Tqcz/D+oASYzGF39P7lKF+Zok/0/hN/NF4mG/j9kvXX8+a//P7L6CQDW2/8/oM2OcLVsAECgL4JF//AAQI684uJtAQFAfqs2VSaWAUC6QU0HF+cBQGyaisfeKgJAWoneOZe/AkC0EP6TaxADQEh4MqxPVANAOGeGHgjpA0Duk0fCmCUEQCZW2pDAfQRApkWOqbf6BEAURS4DeRIFQAQ0gnUxpwVAYbTHYJ3NBUDyItbn6TsGQB944XzmiwZA4BEqWqLQBkDuubOK6CIHQNAAfsxaZQdAUK70qM+8B0C+79E+E/oHQLXb0afvaAhArN4lscuOCEBt9UDj+fsIQJzNeSOEIwlA6sExBdKhCUCKvM2VPLgJQHirIQj1TApAKaWIPJJ7CkBomnV6reEKQMqxiIcfMwtAVonJ7GV2C0ChzMgjWLgLQEN4HV8eCwxAKQ2hkmYvDEA0Z3HR1p8MQOXeLrrCrwxAIlbFQ480DUAA6tX31kMNQBFFGbZHyQ1AEgD1hkrWDUD9M20oAF4OQJm5BCLnYw5AcA4N5V/gDkDuIsGauPIOQMICPSNPQg9A3BEVDXGHD0AMbf4SEKQPQJtl7xCBBRBAZYC0vxQOEEDE0RfuXDoQQNx33vhwWBBAEp8hNZppEEAo2nqqRI0QQFRvCDLNohBAmoYvV0ikEEBkjvRH/cUQQOQIE39w5BBAy2YyayntEEBLWwaICRARQENeXKSFNxFA3rzgV29CEUAy2NA0Q38RQLpVht3hgRFAeulW97WxEUC3ejxik8URQDFNsBY+zBFAWWwlzW3aEUAdLqsc8AISQKlE2k+aFhJAZBrsy4syEkCAXka35VQSQCA8BIn2YBJAAokNUqZoEkBbUEjIdHASQOHD3DqfdBJAY5h9gkd5EkAmSCswdn4SQGU/OWwOjxJAZjTeaCarEkCXMy7CUqsSQAT9w3VFxxJA2Mopb0TLEkBwCJsM8swSQIbxXhsC2xJAtfQU0ODqEkAcFjahIe4SQMn50vgU3xJAulpZl0fMEkDoP5jZLsYSQBjfpV0WyxJAI1K8y2XKEkDB6MHhN7kSQJczLsJSqxJA532FrLSpEkBM69v+LasSQJczLsJSqxJAgd6hDnixEkCXMy7CUqsSQGlY+eiMpRJAOk7kbt53EkAgPASJ9mASQHtYPYC4JxJAqUTaT5oWEkARP1aKLhESQBm/Cqt48xFAMU2wFj7MEUBeIgcihbARQLwMwO4bkRFAulWG3eGBEUCLWYA9wm0RQENeXKSFNxFAy2YyayntEEApOCnBXt0QQFRvCDLNohBAkjhk3L6bEEDdd974cFgQQHxf9Z2rMBBAZYC0vxQOEEDcERUNcYcPQO4iwZq48g5AvFJ6CzHXDkD+M20oAF4OQBBFGbZHyQ1AJ3FggyrBDUAiVsVDjzQNQDRncdHWnwxAfo7CFeZWDEBEeB1fHgsMQFaJyexldgtAaJp1eq3hCkB4qyEI9UwKQNKgFQl7NgpAirzNlTy4CUCczXkjhCMJQKzeJbHLjghAvu/RPhP6B0DQAH7MWmUHQOARKlqi0AZA8yLW5+k7BkAENIJ1MacFQAiNIlw9nwVAFEUuA3kSBUAmVtqQwH0EQDhnhh4I6QNAyLvrlavMA0BIeDKsT1QDQFqJ3jmXvwJAbJqKx94qAkBzz3xN1QQCQH6rNlUmlgFAjrzi4m0BAUBPuhWS1NAAQKDNjnC1bABAZb11/Pmv/z927p0kDIr/P4TfzReJhv4/qAEmMxhd/T/hzg/Xggj9P8wjfk6nM/w/7EXWaTYK+z8CfxK2gcD6PxBoLoXF4Pk/C1oren31+D80ioagVLf4P9uUS79Nlfc/VKzeu+ON9z94zjbXcmT2P4DuUEA8xfU/nPCO8gE79T/AEucNkRH0P3dV8PrT5/M/4DQ/KSDo8j8+QA/kLGjyPwRXl0SvvvE/fwyh86dC8T8mee9fPpXwP+wdIFqBB/A/kDaP9prX7j/QEVb9Kg3tP9h6Py25hOw/HL/vY9cx6j9Eegv0y87pP2QDoJr13uc/DqmRRB9y5z+oR1DRE4zlP7WbEfahVeU/7IsACDI54z8ntDk3cCfjPzTQsD5Q5uA/S4cwn56/4D/wKMLq3CbdP+nVuL24itw/KVXiMAqp2D+AsSJYGYHYP57v7SZYdtU/CDqDxVXb0z+j4hfSSFbSPyCFx2Uka84/tYQbprQwzj9H1bpgkOHHP0CWiECdH8U/dJMYd7KPwj8u8YrCPG25P6BOkzYsqLc/bGSv1N2UpT8Aw1Wwd0SUP9Vq0YjPj5C/ANrQvOALq7/uq6n6orSwv1KFBTGtZru/cCVzVH8OwL9XE+fZKkvCvyzQikpy28a/YBSyeQZayb/DOXor2z7Nv6CBeM/GUtG/o94sqdYc0r8IqDO7NcnUvxj5F2KK+NW/ugFDKbl31r/QI+QXOBrYv6pOtVYDltm/iHC39E2e2r+/HClkpbjav5Vzw+970Nu/ZEqkBqP03L9FQHWT3V/evwDoVocRRN+/pkqroqEn4L9MRXRR5Qrhv2R6ehvao+G/vC/7jOr04b/zbj2wa17iv8RQrVV95+K/4upMokcf47+ncfgGwsXjv3TrSlbMR+S/4Oit1bnJ5L8lXVJ2N23lvzYOeisiNeW/zSraDRyn5L9IQhcPiGfkv3TrSlbMR+S/1FJS+rqr5L9XUlp2Qorlv13LJ0kmK+a/8p3thbWt5b9060pWzEfkv9DUxXjf+OO/jhTLhotp4r+8L/uM6vThv1GCJtf+7uG/vC/7jOr04b/qgYdW8jjiv7wv+4zq9OG/6iLA2c+j4b9cqf4JiWHgv6YJbcrB+9+/AOhWhxFE37/QpA2Dkvzev2q65Ixyhty/iHC39E2e2r9k05hjnNzYvxj5F2KK+NW/DrCNe56h1L++N+DeVJbRv6CBeM/GUtG/rspAFVoQzb9gFLJ5BlrJv5TVXMh7mcG/cCVzVH8OwL8A2tC84Aurv1wr4SDq+5S/AMNVsHdElD+gTpM2LKi3P+Cq7o40WcQ/QJaIQJ0fxT8ghcdlJGvOPwg6g8VV29M/2lFtA6yu1z+BsSJYGYHYP/AowurcJt0/NNCwPlDm4D/siwAIMjnjP6hHUNETjOU/ZAOgmvXe5z8cv+9j1zHqP+rPOGzA0+s/2Ho/LbmE7D/xnPFmPgDrPxy/72PXMeo/ZAOgmvXe5z8QjB4zCsjmP6hHUNETjOU/UNS5PW5d5D/siwAIMjnjP5C6AMrJseE/NNCwPlDm4D/KF1SlTNndP/EowurcJt0/dgTDZ7uJ2T+AsSJYGYHYP72RCCEFc9Y/jVlzwgag1D8IOoPFVdvTP6GvF83TbtM/1jrlyxVF0j9s7D18wF/RP6RHCJ3fwNA/forkPlU80D/4d+NZnHXPPzCpauIXmM4/q0r1TZyKzj+udE1WqB7PP5TX3lkwDtA/nJpb6Vb30D/RGwtXGgjSP4k3v3QAsdI/gwBj4Ucx0z8IOoPFVdvTP3JPkAXzPtQ/ARGmlBns1T8atrjm48jXP4CxIlgZgdg/q2rbVfqT2T/gSTVyrb7bP/AowurcJt0/rhO7ciZT3j+Oqu12BobgPzTQsD5Q5uA/QobCKF3p4T9eEx8zljLjP+yLAAgyOeM/8vLH0g485D+27JFoNHnlP6hHUNETjOU/nLQQ9NDu5j9kA6Ca9d7nP6ETt4+oqug/HL/vY9cx6j9XwrkY3X3qP6QScZx5Y+w/2Ho/LbmE7D/qvN3dsWzuP5A2j/aa1+4/APqCXJZH8D8mee9fPpXwP2UnZ/0rS/E/BFeXRK++8T+AtGumlUnyP+A0Pykg6PI/079kX5hg8z/AEucNkRH0P8DjYU5XpvQ/nPCO8gE79T+NrqKWEfj1P3jONtdyZPY/uHvWkLFN9z9UrN674433PzSKhqBUt/g/PMg/Oorf+D8QaC6FxeD5PwCzJ/f3lPo/7EXWaTYK+z/MI35OpzP8PzxH1029V/w/qAEmMxhd/T/FgKdbLlf+P4TfzReJhv4/Y711/Pmv/z+gzY5wtWwAQI684uJtAQFAfqs2VSaWAUDdFKtqCqcBQGyaisfeKgJAWoneOZe/AkBIeDKsT1QDQEqGlO0qZANAOGeGHgjpA0AmVtqQwH0EQBRFLgN5EgVABDSCdTGnBUDyItbn6TsGQOARKlqi0AZA0AB+zFplB0C+79E+E/oHQKzeJbHLjghAnM15I4QjCUAETyXpvIQJQIq8zZU8uAlAeKshCPVMCkBomnV6reEKQDLmoRCV9QpAVonJ7GV2C0DtWJhAtqgLQER4HV8eCwxAxD4dvShRDEA0Z3HR1p8MQM4GiTjn3AxAIlbFQ480DUASYILnwEsNQNmD8HUSnQ1AEEUZtkfJDUDKlsaO6uYNQKcfSVRlOA5A/jNtKABeDkDBaZVATnYOQEsmSvs3ng5A7iebZwmzDkAA3l55DbQOQJpmq54ftA5A0hAl66O1DkAKjxbHOq8OQLznnQjJoQ5AxgFqs8CODkD6p9qxmnEOQP4zbSgAXg5AQq9izttODkDIh2A3xDIOQNwalsY2Ew5Af8q8+dnqDUAQRRm2R8kNQNwy9To9uw1Asq//RWqBDUAAP0E0+D8NQCJWxUOPNA1ARXp602sQDUCI39i+V98MQDRncdHWnwxAjLSeyxSdDEB4d1mJYk8MQER4HV8eCwxAoXVHsjT3C0Bnd1mCnJQLQFaJyexldgtAYviwviMsC0BomnV6reEKQFMYTKx8wgpAknnp8n5VCkB4qyEI9UwKQNJbnTXq7AlAirzNlTy4CUD0DTSMdocJQJzNeSOEIwlAH+Zt+4EVCUCs3iWxy44IQF8EcH6mjQhAp7b6vC8HCEC+79E+E/oHQPXAWvQZfQdA0AB+zFplB0CiMxhX8eQGQOARKlqi0AZAAsJGfUM/BkDyItbn6TsGQAQ0gnUxpwVAPXX8BXGdBUAURS4DeRIFQCn8wXhx9ARAJlbakMB9BEBLuynv7iAEQDhnhh4I6QNASHgyrE9UA0C4UGF7CjUDQFqJ3jmXvwJAT0i5xXxgAkBsmorH3ioCQH6rNlUmlgFAXi7yIn10AUCOvOLibQEBQKKT+cJ1ewBAoM2OcLVsAEBkvXX8+a//P4CUFe/1i/4/hN/NF4mG/j+oASYzGF39P8wjfk6nM/w/7vceJUNp+z/sRdZpNgr7PxBoLoXF4Pk/NIqGoFS3+D9UrN674433P3jONtdyZPY/nPCO8gE79T/AEucNkRH0P+A0Pykg6PI/BFeXRK++8T8mee9fPpXwP5A2j/aa1+4/2Ho/LbmE7D/xnPFmPgDrPw==","dtype":"float64","order":"little","shape":[515]}},"selected":{"id":"23897"},"selection_policy":{"id":"23896"}},"id":"23868","type":"ColumnDataSource"},{"attributes":{},"id":"23842","type":"BasicTicker"},{"attributes":{},"id":"23892","type":"AllLabels"},{"attributes":{},"id":"23849","type":"ResetTool"},{"attributes":{"coordinates":null,"group":null},"id":"23888","type":"Title"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23857","type":"BoxAnnotation"},{"attributes":{"tools":[{"id":"23849"},{"id":"23850"},{"id":"23851"},{"id":"23852"},{"id":"23853"},{"id":"23854"},{"id":"23855"},{"id":"23856"}]},"id":"23859","type":"Toolbar"},{"attributes":{"coordinates":null,"formatter":{"id":"23891"},"group":null,"major_label_policy":{"id":"23892"},"ticker":{"id":"23846"}},"id":"23845","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23876","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23882","type":"Patch"},{"attributes":{},"id":"23852","type":"WheelZoomTool"},{"attributes":{"toolbars":[{"id":"23859"}],"tools":[{"id":"23849"},{"id":"23850"},{"id":"23851"},{"id":"23852"},{"id":"23853"},{"id":"23854"},{"id":"23855"},{"id":"23856"}]},"id":"23906","type":"ProxyToolbar"},{"attributes":{},"id":"23900","type":"UnionRenderers"},{"attributes":{},"id":"23837","type":"LinearScale"},{"attributes":{"source":{"id":"23868"}},"id":"23873","type":"CDSView"},{"attributes":{},"id":"23854","type":"UndoTool"},{"attributes":{"children":[[{"id":"23832"},0,0]]},"id":"23905","type":"GridBox"},{"attributes":{"toolbar":{"id":"23906"},"toolbar_location":"above"},"id":"23907","type":"ToolbarBox"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23869","type":"Patch"},{"attributes":{},"id":"23898","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"23874"},"glyph":{"id":"23875"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23877"},"nonselection_glyph":{"id":"23876"},"view":{"id":"23879"}},"id":"23878","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23883","type":"Patch"},{"attributes":{},"id":"23894","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23871","type":"Patch"},{"attributes":{"coordinates":null,"data_source":{"id":"23880"},"glyph":{"id":"23881"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23883"},"nonselection_glyph":{"id":"23882"},"view":{"id":"23885"}},"id":"23884","type":"GlyphRenderer"},{"attributes":{},"id":"23846","type":"BasicTicker"},{"attributes":{"callback":null},"id":"23856","type":"HoverTool"},{"attributes":{"below":[{"id":"23841"}],"center":[{"id":"23844"},{"id":"23848"}],"height":500,"left":[{"id":"23845"}],"output_backend":"webgl","renderers":[{"id":"23872"},{"id":"23878"},{"id":"23884"}],"title":{"id":"23888"},"toolbar":{"id":"23859"},"toolbar_location":null,"width":500,"x_range":{"id":"23886"},"x_scale":{"id":"23837"},"y_range":{"id":"23887"},"y_scale":{"id":"23839"}},"id":"23832","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":{"__ndarray__":"Xue3Q6gB8T/tLujL97bwPzY9T/gFivA/tthUSuRz8D9JBK4eNIrwP+4IsqEF1fA/MVOjPgdD8T+IDng9NlLxP0ktOvhq1fE/KjMabWSK8j9o3BuT04vyP4Lf2O6LXPM/SKq/6HDF8z/grwjFnCv0Pyh4Yz4O//Q/QII07VDS9T8IRgeUqzj2Pz2kNn4Mu/Y/6BOr6Uhy9z8U10tXa9/3P8jhTj/mq/g/l8kz/lcw+T+or/KUg+X5P+KAOFP/i/o/iH2W6iAf+z+Jl6HJ8VL8P2hLOkC+WPw/SBnelVuS/T8o54Hr+Mv+P3vSOpIl2v4/hNqSIMsCAEBpb62A7Z4AQHTBZMuZnwBAZKg2dmg8AUBUjwghN9kBQER22ssFdgJANl2sdtQSA0BpSI8cxpsDQCdEfiGjrwNAFitQzHFMBEAGEiJ3QOkEQPKpTezW9ARA9vjzIQ+GBUDm38XM3SIGQEJbzHbGtAZA1saXd6y/BkDGrWkie1wHQFgeTEr3YgdAS0YrvD3QB0C3lDvNSfkHQEduKcrjBwhAIsNOqJItCEDaSg7Xsk0IQJq7jv3IWghAMIhdCZxUCEAUeci8JjQIQP8fFHNJ/gdAtpQ7zUn5B0B+pwRtS8IHQHFhX3cggwdAxq1pIntcB0A4WnuzWTcHQOv6BPBi2gZA1caXd6y/BkDMDvamd2oGQObfxczdIgZAMxQWUKzzBUD2+PMhD4YFQObEpub9cgVABhIid0DpBEBB7Wbtdt8EQBYrUMxxTARAmYIZxv9CBEAmRH4ho68DQFQkatgFnQNANl2sdtQSA0BiVM8xiNICQER22ssFdgJAzrLjsv/lAUBUjwghN9kBQGSoNnZoPAFAR63cieHYAEB0wWTLmZ8AQITakiDLAgBAKOeB6/jL/j8WKbeNYNr9P0gZ3pVbkv0/aEs6QL5Y/D+IfZbqIB/7P6iv8pSD5fk/yOFOP+ar+D/oE6vpSHL3PwhGB5SrOPY/MkJCSUfD9T8oeGM+Dv/0P0iqv+hwxfM/qAd5R9Fr8z9o3BuT04vyP/mVz+svGvI/BGKQdhNm8T+IDng9NlLxP17nt0OoAfE/","dtype":"float64","order":"little","shape":[102]},"y":{"__ndarray__":"VKzeu+ON9z80ioagVLf4PxBoLoXF4Pk/7EXWaTYK+z/MI35OpzP8P6gBJjMYXf0/hN/NF4mG/j+8ZcbVO6f+P2S9dfz5r/8/oM2OcLVsAEA9aLLOxW0AQI684uJtAQFALH4RVjRLAUB+qzZVJpYBQGyaisfeKgJAWoneOZe/AkCmDL3oZwQDQEh4MqxPVANAAslAfeq1A0A4Z4YeCOkDQDzSA0rAQQRAJlbakMB9BEApF9VNHs0EQBRFLgN5EgVARnjbxulKBUAENIJ1MacFQDubgovbqAVAu9/kikzwBUD8dRC5ajgGQPIi1ufpOwZAxMi8/2eFBkDgESpaotAGQFhwtFPw0AZAjeczgb8GB0DI6pBrmSMHQIT1Y0fENQdAuiotju9NB0DQAH7MWmUHQFwDYF4MaQdAnuMKyjB1B0C4dbKZeWcHQNAAfsxaZQdAsUWCIvtGB0BkS6CpMBUHQOARKlqi0AZANQnGMufJBkBF/s+LxkIGQPIi1ufpOwZABDSCdTGnBUCUYHwS2kEFQBRFLgN5EgVAJlbakMB9BEA4Z4YeCOkDQEh4MqxPVANAWoneOZe/AkBsmorH3ioCQH6rNlUmlgFAidwBEc2JAUCOvOLibQEBQKDNjnC1bABAbCtM3WodAEBkvXX8+a//P4TfzReJhv4/tOrQ5rU6/j+oASYzGF39P4Pn1klip/w/zCN+Tqcz/D95lAaFXjb7P+xF1mk2Cvs/JiaTQ2v0+T8QaC6FxeD5P2kldC6fyfg/NIqGoFS3+D+Nba/NN673P1Ss3rvjjfc/+ZbkHF++9j94zjbXcmT2P+I3UKnK7PU/nPCO8gE79T8gOrzbPyv1P2ZYTOvjcvQ/wBLnDZER9D8567ivQNnzP0GM4051dvM/jLUMwVwj8z/gND8pIOjyPz5duuP71vI/dEZoKamd8j8AJ9gCFHTyP4Br6RfBWvI/4nH1Voxc8j9G0Kvu2nTyP2fsY9X+tvI/4DQ/KSDo8j8u/VGhVjzzP+6OjE+d2/M/wBLnDZER9D+OTLq6u8f0P5zwjvIBO/U/eM4213Jk9j+uxId+J5f2P1Ss3rvjjfc/","dtype":"float64","order":"little","shape":[102]}},"selected":{"id":"23901"},"selection_policy":{"id":"23900"}},"id":"23880","type":"ColumnDataSource"},{"attributes":{},"id":"23895","type":"AllLabels"}],"root_ids":["23908"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"84a15978-2637-401a-8ba7-a5d282c77a23","root_ids":["23908"],"roots":{"23908":"f3b79cb3-b761-4e2c-bc65-c684850365a5"}}];
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