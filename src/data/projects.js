// Filter categories used by the Projects section.
import { withBase } from '../utils/paths'

export const filters = ['All', 'Power BI', 'Excel', 'Python']

// ---------------------------------------------------------------------------
// FEATURED PROJECTS (visually dominant, shown in this order)
// ---------------------------------------------------------------------------
export const featuredProjects = [
  {
    id: 'salla',
    order: 1,
    name: 'Salla Contact Center Performance Dashboard',
    category: 'Power BI',
    type: 'Contact Center / Operations Analytics',
    tools: ['Power BI', 'DAX', 'Power Query'],
    description:
      'Participated in designing and developing a Power BI dashboard to analyze contact center performance, monitor operational KPIs, and transform operational data into actionable insights. The objective was not simply visualization, but providing an operational view that supports data-driven decision-making.',
    kpis: [
      { label: 'Service Level', value: '91%' },
      { label: 'Abandon Rate', value: '1.3%' },
      { label: 'Forecast Accuracy', value: '71%' },
    ],
    kpiFocus: ['Service Level', 'Abandon Rate', 'Average Speed of Answer (ASA)', 'Forecast Accuracy', 'Handling Rate'],
    analysisPoints: [
      'Agent ranking',
      'Benchmarking vs. team average',
      'Decomposition tree',
      'Call volume driver analysis',
      'DAX measures',
      'Interactive Power BI visualizations',
    ],
    links: {
      powerbi:
        'https://app.powerbi.com/view?r=eyJrIjoiOTcyZjk0ZTItNjlkMi00ZTE3LTljZTgtM2MzODY1ZDk0ZDUwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9&pageName=724e5020a936188e9380',
      video: 'https://drive.google.com/file/d/1846ya17CH0vXr_i6y6DZSElN3Zdsorvp/view?usp=drive_link',
      github: null,
      linkedinPost: 'https://lnkd.in/p/e4i4-acG', // TODO: add your LinkedIn post link for this project
      imagesOnly: false,
    },
    images: {
      cover: withBase('images/projects/salla/salla-cover.jpeg'),
      gallery: [withBase('images/projects/salla/salla-1.jpeg'), withBase('images/projects/salla/salla-2.jpeg')],
    },
  },
  {
    id: 'pharmacy',
    order: 2,
    name: 'Pharmaceutical Inventory & Supplier Analytics Dashboard',
    altName: 'Pet Pharmacy Dashboard',
    category: 'Power BI',
    type: 'Inventory / Supplier Analytics',
    tools: ['Power BI', 'DAX', 'Power Query'],
    description:
      'Developed an interactive Power BI dashboard to analyze pharmaceutical inventory and supplier performance and provide a clearer view of stock levels, inventory value, products, and supplier contribution.',
    kpis: [
      { label: 'Total Inventory Value', value: null },
      { label: 'Total Quantity', value: null },
      { label: 'Average Unit Cost', value: null },
      { label: 'Product Count', value: null },
    ],
    kpiFocus: ['Total Inventory Value', 'Total Quantity', 'Average Unit Cost', 'Product Count'],
    analysisPoints: [
      'Inventory distribution',
      'Products with high inventory levels',
      'Products with low quantities that may require replenishment',
      'Supplier contribution to inventory value',
      'Product distribution by supplier',
      'Interactive tooltips (supplier, quantity, average price, inventory value)',
    ],
    links: {
      powerbi:
        'https://app.powerbi.com/view?r=eyJrIjoiMDRkNGZlMzMtMGFiMi00MzQ1LThjNTAtZmJjNTEzNzk4NWJjIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9&pageName=7a2c3397ce1349579347',
      video: 'https://drive.google.com/file/d/18qUHKY1-YyYA9ZwaDDmHKO7zRD3lneME/view?usp=drive_link',
      github: null,
      linkedinPost: 'https://lnkd.in/p/eFhaTxZ2', // TODO: add your LinkedIn post link for this project
      imagesOnly: false,
    },
    images: {
      cover: withBase('images/projects/pharmacy/pharmacy-cover.jpeg'),
      gallery: [
        withBase('images/projects/pharmacy/pharmacy-1.jpeg'),
        withBase('images/projects/pharmacy/pharmacy-2.jpeg'),
        withBase('images/projects/pharmacy/pharmacy-3.jpeg')
      ],
    },
  },
  {
    id: 'rvo',
    order: 3,
    name: 'Netherlands Enterprise Agency (RVO) \u2014 Data Analysis & Dashboard Project',
    category: 'Power BI',
    type: 'Data Quality / Survey Analysis / Business Intelligence',
    tools: ['Power BI', 'Power Query', 'Excel', 'DAX', 'Kobo Toolbox'],
    description:
      'Conducted comprehensive data quality assurance and analysis on survey datasets collected through Kobo Toolbox for the Netherlands Enterprise Agency (RVO). Reviewed and validated survey responses, performed data cleaning and transformation, built data models and relationships, and developed analytical dashboards and visualizations.',
    kpis: [],
    scopeStats: [
      { label: 'Charts built', value: '~108' },
      { label: 'Dashboard pages', value: '~20' },
    ],
    analysisPoints: [
      'Data quality validation \u2014 missing values, inconsistencies, contradictions, data entry errors',
      'Data cleaning and transformation',
      'Data modeling',
      'Power Query',
      'DAX',
      'Exploratory data analysis',
      'Dashboard development',
    ],
    links: {
      powerbi:
        'https://app.powerbi.com/view?r=eyJrIjoiNmE4N2M4M2UtOThhMS00NDFhLWI1YWUtZGEzZDNkNjgzOWRkIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9&pageName=bf655900cc2688017cd8',
      video: null,
      github: null,
      linkedinPost: null,
      imagesOnly: true,
    },
    images: {
      cover: withBase('images/projects/rvo/rvo-cover.jpeg'),
      gallery: [
        withBase('images/projects/rvo/rvo-1.jpeg'),
        withBase('images/projects/rvo/rvo-2.jpeg'),
        withBase('images/projects/rvo/rvo-3.jpeg'),
        withBase('images/projects/rvo/rvo-4.jpeg'),
        withBase('images/projects/rvo/rvo-5.jpeg'),
      ],
    },
  },
]

// ---------------------------------------------------------------------------
// ADDITIONAL PROJECTS (smaller cards)
// ---------------------------------------------------------------------------
export const additionalProjects = [
  {
    id: 'misuo',
    name: 'MISUO Sales & Delivery Dashboard',
    category: 'Excel',
    tools: ['Excel'],
    description:
      'Interactive Excel dashboard for analyzing sales, orders, products, sales platforms, geographic performance, and delivery efficiency.',
    image: withBase('images/projects/misuo/misuo-dashboard.jpg'),
    links: {
      github: 'https://github.com/Moustafa-tech/MISUO-Sales-Delivery-Dashboard',
      linkedinPost: 'https://lnkd.in/p/e6vN7-Rm',
    },
  },
  {
    id: 'python-dq',
    name: 'Python Data Quality Validation Project',
    category: 'Python',
    tools: ['Python', 'Pandas'],
    description:
      'A Python script built to review a large survey dataset (around 200 questions) and flag data quality issues \u2014 including invalid phone numbers, missing data, contradictions, and duplicate or repeated responses. This was a data quality validation tool, not a full analytics project.',
    links: {
      github: null,
      linkedinPost: null,
    },
  },
]
