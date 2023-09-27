export default {
    methods : {
        getEmptyPeriod() {
            return {
              since: "00:00",
              until: "00:00",
            };
          },
      
          getUndefinedPeriod() {
            return {
              since: undefined,
              until: undefined,
            };
          },
    }
}