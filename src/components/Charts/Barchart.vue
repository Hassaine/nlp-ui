<template>
  <zingchart :data="myConfig"></zingchart>
</template>

<script>
import zingchartVue from "zingchart-vue";
export default {
  data() {
    return {
      myConfig: {
        graphset: [
          {
            type: "bar3d",
            "background-color": "white",

            title: {
              text: "tags frequency per corpus",
              "font-color": "#7E7E7E",
              backgroundColor: "none",
              "font-size": "22px",
              alpha: 1,
              "adjust-layout": true
            },
            plotarea: {
              margin: "dynamic"
            },
            legend: {
              layout: "x3",
              overflow: "page",
              alpha: 0.05,
              shadow: false,
              align: "center",
              "adjust-layout": true,
              marker: {
                type: "circle",
                "border-color": "none",
                size: "10px"
              },
              "border-width": 0,
              maxItems: 3,
              "toggle-action": "hide",
              pageOn: {
                backgroundColor: "#000",
                size: "10px",
                alpha: 0.65
              },
              pageOff: {
                backgroundColor: "#7E7E7E",
                size: "10px",
                alpha: 0.65
              },
              pageStatus: {
                color: "black"
              }
            },
            plot: {
              "bars-space-left": 0.15,
              "bars-space-right": 0.15,
              animation: {
                effect: "ANIMATION_SLIDE_BOTTOM",
                sequence: 0,
                speed: 800,
                delay: 800
              }
            },
            "scale-y": {
              "line-color": "#7E7E7E",
              item: {
                "font-color": "#7e7e7e"
              },
              values: "0:6000:100",
              guide: {
                visible: true
              },
              label: {
                text: "frequence",
                "font-family": "arial",
                bold: true,
                "font-size": "14px",
                "font-color": "#7E7E7E"
              }
            },
            scaleX: {
              values: [
                "NElexicon.txt",

                "ArNameLexicon.txt",
                "hadith_corpus_pure_segmented.txt"
              ],
              placement: "default",
              tick: {
                size: 58,
                placement: "cross"
              },
              itemsOverlap: true,
              item: {
                offsetY: -55
              }
            },

            tooltip: {
              visible: false
            },
            "crosshair-x": {
              "line-width": "100%",
              alpha: 0.18,
              "plot-label": {
                "header-text": "%kv Sales"
              }
            },
            series: [
              {
                values: [3000, 2000, 5000],
                alpha: 0.95,
                borderRadiusTopLeft: 7,
                "background-color": "#8993c7",
                text: "PERSON"
              },
              {
                values: [2000, 1000, 200],
                borderRadiusTopLeft: 7,
                alpha: 0.95,
                "background-color": "#fdb462",
                text: "ORG"
              },
              {
                values: [1000, 3000, 2000],
                alpha: 0.95,
                borderRadiusTopLeft: 7,
                "background-color": "#8dd3c7",
                text: "LOC"
              },
              {
                values: [20, 20, 6000],
                borderRadiusTopLeft: 7,
                alpha: 0.95,
                "background-color": "#fb8072",
                text: "ALLAH"
              },
              {
                values: [3000, 2000, 4000],
                borderRadiusTopLeft: 7,
                alpha: 0.95,
                "background-color": "#80b1d3",
                text: "DATE"
              },
              {
                values: [3000, 3000, 3000],
                borderRadiusTopLeft: 7,
                alpha: 0.95,
                "background-color": "#b3de69",
                text: "CONJ"
              }
            ]
          }
        ]
      },
      myData: {
        type: "line",
        title: {
          text: "Hello World"
        }
      },
      mySeries: [
        { values: [1, 2, 4, 5, 6], text: "Apple" },
        { values: [1, 2, 4, 5, 3], text: "facebook" }
      ]
    };
  },
  components: {
    zingchart: zingchartVue
  }
};
</script>

<style>
</style>