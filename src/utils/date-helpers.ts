/**
 * Date utility functions
 */
export const getDateRange = (period: string) => {
  const today = new Date()
  const formatDateISO = (date: Date) => date.toISOString().split("T")[0]

  switch (period) {
    case "Today":
      return {
        start_date: formatDateISO(today),
        end_date: formatDateISO(today),
      }
    case "This Week":
      // International standard: Monday is first day of week (1), Sunday is last (0)
      const currentDay = today.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const daysFromMonday = currentDay === 0 ? 6 : currentDay - 1 // If Sunday, it's 6 days from Monday

      const weekStart = new Date(today)
      weekStart.setDate(today.getDate() - daysFromMonday)

      return {
        start_date: formatDateISO(weekStart),
        end_date: formatDateISO(today),
      }
    case "This Month":
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
      return {
        start_date: formatDateISO(monthStart),
        end_date: formatDateISO(today),
      }
    case "This Year":
      const yearStart = new Date(today.getFullYear(), 0, 1)
      return {
        start_date: formatDateISO(yearStart),
        end_date: formatDateISO(today),
      }
    default:
      return {
        start_date: formatDateISO(today),
        end_date: formatDateISO(today),
      }
  }
}

export const formatDateISO = (date: Date) => date.toISOString().split("T")[0]

export const formatDatePretty = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}







export const getDateRangeFromGroupBy = (period: string) => {
  switch (period) {
    case "Today":
      return getDateRange("Today");
    case "By Week":
      return getDateRange("This Week");
    case "By Month":
      return getDateRange("This Month");
    case "By Year":
      return getDateRange("This Year");
    default:
      return getDateRange("This Month");
  }
};


export const getApiGroupBy = (period: string): string => {
  switch (period) {
    case "Today":
      return "today";
    case "By Week":
      return "week";
    case "By Month":
      return "month";
    case "By Year":
      return "year";
    default:
      return "month";
  }
};