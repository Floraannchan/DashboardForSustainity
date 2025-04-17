
# Dashboard App (Next.js + Redux + Recharts)

This project is a responsive dashboard web application built using **Next.js**, **Redux Toolkit**, and **Recharts**. It includes:

- A dynamic **Data Table** with filtering
- A **Pie Chart** visualizing the top 10 purchase prices
- A **Bar Chart** comparing product volume and price

---

# Setup Instructions

1. **Clone the repository**
git clone https://github.com/Floraannchan/DashboardForSustainity.git
cd dashboard
2. npm install
3. npm run dev

# Approach
Used redux to manage and select data across components. Limited the chart data to top 100 entries for better performance. Sorted and grouped chart data to keep it visually meaningful.


# Challenges Faced
Handling Large Datasets: Working with a large amount of data was challenging at first. It affected performance and chart readability. To address this, I learned to slice the data and aggregate smaller values into an "Others" category.

Not Familiar with Big Data: This was my first time dealing with large-scale data filtering, transformation, and visualization, which required understanding how to work with arrays efficiently.

Next.js Learning Curve: While I’m still learning Next.js, understanding how server/client components work and managing state between them was a bit tricky.

