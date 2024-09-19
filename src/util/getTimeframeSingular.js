  export const getTimeframeSingular = (timeframe) => {
    switch (timeframe) {
      case "daily":
        return "Day";
      case "weekly":
        return "Week";
      case "monthly":
        return "Month";
      default:
        return timeframe;
    }
  };