/**
 * Catálogo Central de Proyectos de Análisis de Datos y Ciencia de Datos
 * Gabriel Quezada Avila · Ingeniero en Informática (UPIICSA IPN)
 * 
 * Contiene proyectos reales en vivo de Tableau Public, Excel (.xlsx) y proyectos futuros.
 */

export const analyticsProjects = [
  {
    id: 'tableau_contributel',
    title: 'Reporte Operativo de Llamadas — CONTRIBUTEL',
    type: 'tableau',
    typeBadge: 'Tableau Public',
    typeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    isLive: true,
    featured: true,
    summary: 'Análisis analítico de métricas de telefonía y atención: volumen transaccional, tiempos de resolución (TMO/AHT), tasas de abandono y distribución por franjas horarias.',
    objective: 'Monitorear la eficiencia operativa del centro de contacto de CONTRIBUTEL (SAFCDMX), identificar picos de saturación y optimizar la asignación de recursos basada en tendencias de demanda.',
    dataset: 'Registros transaccionales de PBX/Call Center con marcas de tiempo, duración, estatus y tipología de llamada.',
    metrics: [
      { value: '100%', label: 'Visibilidad Operativa' },
      { value: 'TMO / AHT', label: 'Control de Tiempos' },
      { value: 'Tiempo Real', label: 'Filtros Dinámicos' }
    ],
    tags: ['Tableau Public', 'Análisis Operativo', 'KPIs de Telefonía', 'Calculated Fields', 'Filtros Interactivos'],
    link: 'https://public.tableau.com/app/profile/gabriel.quezada5584/viz/Reportedellamadas-CONTRIBUTEL/Reportedellamadas-Contributel',
    embedUrl: 'https://public.tableau.com/views/Reportedellamadas-CONTRIBUTEL/Reportedellamadas-Contributel?:showVizHome=no&:embed=true',
    icon: '📊'
  },
  {
    id: 'excel_modelo_presupuesto_historico',
    title: 'Modelo de Presupuesto & Análisis Histórico Multi-Sede',
    type: 'excel',
    typeBadge: 'Excel Avanzado',
    typeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    isLive: true,
    featured: true,
    summary: 'Modelo analítico y financiero de consolidación histórica operativa multi-sede (Labor, Orizaba, Rainier, Otros), formulación de presupuestos y tablero de control ejecutivo.',
    objective: 'Consolidar datos históricos dispersos entre diferentes sedes operativas, modelar proyecciones presupuestales y presentar variaciones porcentuales en un Dashboard interactivo.',
    dataset: 'Histórico de costos laborales, gastos operativos por sede (Orizaba, Rainier, Labor, Otros), matriz presupuestal y hojas analíticas interconectadas.',
    metrics: [
      { value: '4 Sedes', label: 'Consolidación' },
      { value: '8 Hojas', label: 'Estructura Modelo' },
      { value: 'Dashboard', label: 'Visualización' }
    ],
    tags: ['Excel Avanzado', 'Modelado Financiero', 'Presupuestos', 'Consolidación Multi-Sede', 'Dashboards'],
    link: 'https://docs.google.com/spreadsheets/d/1C8vFef_NI6D9wVpvGjlunEWPKfOzo9x1/edit?usp=sharing',
    downloadPath: '/projects/modelo-presupuesto-analisis-historico.xlsx',
    icon: '📗'
  },
  {
    id: 'excel_comisiones_ventas_heroic',
    title: 'Tablero de Control de Comisiones (HEROIC) & Ventas Semanales',
    type: 'excel',
    typeBadge: 'Excel & BI Comercial',
    typeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    isLive: true,
    featured: true,
    summary: 'Sistema de liquidación y auditoría de comisiones comerciales (HEROIC), seguimiento transaccional de ventas de pases y monitoreo de lifts semanales.',
    objective: 'Automatizar el cálculo de comisiones comerciales de agentes, eliminar discrepancias en dispersión de incentivos y visualizar el ritmo de ventas de pases por semana en un tablero ejecutivo.',
    dataset: 'Transacciones de ventas de pases, tabuladores de comisiones HEROIC, registros semanales de lifts y matriz de análisis resumido.',
    metrics: [
      { value: '100% Automático', label: 'Cálculo Comisiones' },
      { value: 'Pases & Lifts', label: 'Seguimiento Ventas' },
      { value: 'Auditado', label: 'Integridad Reglas' }
    ],
    tags: ['Excel Comercial', 'Cálculo de Comisiones', 'Ventas de Pases', 'Lifts Semanales', 'Auditoría'],
    link: 'https://docs.google.com/spreadsheets/d/1Kkq4nesek3xATDeMAvV15kjCQ8C5LxsM/edit?usp=sharing',
    downloadPath: '/projects/tablero-comisiones-ventas-heroic.xlsx',
    icon: '📋'
  },
  {
    id: 'tableau_ventas_margen',
    title: 'Dashboard de Rentabilidad & Análisis de Ventas (Tableau)',
    type: 'tableau',
    typeBadge: 'Tableau (Próximo)',
    typeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    isLive: false,
    featured: false,
    summary: 'Visualización multidimensional de márgenes operativos, análisis Pareto 80/20 de clientes y proyección estacional de ingresos comerciales.',
    objective: 'Facilitar a directores comerciales la identificación de líneas de producto de alto margen y clientes estratégicos con dashboards exploratorios.',
    dataset: 'Histórico de transacciones ERP con costos unitarios, descuentos aplicados y categorización por región geográfica.',
    metrics: [
      { value: 'Pareto 80/20', label: 'Segmentación' },
      { value: 'Margen Neto', label: 'KPI Principal' },
      { value: 'Geográfico', label: 'Análisis de Región' }
    ],
    tags: ['Tableau Server', 'Modelado Comercial', 'Análisis Pareto', 'DAX/Cálculos', 'Geodatos'],
    link: 'https://public.tableau.com/app/profile/gabriel.quezada5584/vizzes',
    embedUrl: null,
    icon: '📈'
  },
  {
    id: 'tableau_kpis_riesgo',
    title: 'Monitor de Gestión de Riesgo & Recuperación de Cartera (Tableau)',
    type: 'tableau',
    typeBadge: 'Tableau (Próximo)',
    typeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    isLive: false,
    featured: false,
    summary: 'Tablero de diagnóstico para cobranza y exposición de riesgo crediticio con curvas de maduración y distribución por días de mora.',
    objective: 'Detectar patrones tempranos de deterioro en cartera y evaluar la eficacia de estrategias de cobranza segmentadas.',
    dataset: 'Saldos deudores, historial de amortizaciones y estados de cuenta periódicos.',
    metrics: [
      { value: 'Aging Report', label: 'Estratificación Mora' },
      { value: 'Tasa Roll-Rate', label: 'Probabilidad Incumplimiento' },
      { value: 'Tablero Directivo', label: 'Nivel Ejecutivo' }
    ],
    tags: ['Tableau', 'Riesgo Financiero', 'Aging Analysis', 'Curvas de Maduración', 'Storytelling'],
    link: 'https://public.tableau.com/app/profile/gabriel.quezada5584/vizzes',
    embedUrl: null,
    icon: '📉'
  },
  {
    id: 'python_predictive_clustering',
    title: 'Pipeline de Analítica Predictiva & Segmentación con Python',
    type: 'python',
    typeBadge: 'Python & Data Science (Próximo)',
    typeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    isLive: false,
    featured: false,
    summary: 'Cuaderno analítico completo que implementa algoritmos de agrupamiento (K-Means/RFM) y modelos predictivos para scoring de clientes.',
    objective: 'Identificar arquetipos de clientes basados en frecuencia, valor monetario y comportamiento para optimizar campañas de fidelización.',
    dataset: 'Historial transaccional con variables demográficas y de comportamiento digital.',
    metrics: [
      { value: 'RFM + K-Means', label: 'Modelos de Agrupamiento' },
      { value: 'Pandas & Scikit', label: 'Librerías Core' },
      { value: 'EDA Completo', label: 'Análisis Exploratorio' }
    ],
    tags: ['Python', 'Pandas', 'Scikit-Learn', 'Jupyter Notebook', 'Seaborn', 'Machine Learning'],
    link: 'https://github.com/quezarbelia',
    embedUrl: null,
    icon: '🐍'
  }
];
