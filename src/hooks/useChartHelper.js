
const useChartHelper = {
    lineChart: (data, dataKey, key) =>{
            data = data[dataKey] ? data[dataKey] : []
            const categories = data.map(p => p[key])
            const series = data.map(p => p[key+'Value'])
            data = { categories, series }
            return data
    },
    donutChart: (data, dataKey, key) => {
        const res = data = data[dataKey] ? data[dataKey].map((jk) => [jk[key], jk[key+'Value']]) : []
        return res    
    },
    barChart: (data, dataKey, key) => {
        data = data[dataKey] ? data[dataKey] : []
        const categories = data.map(p => p[key])
        const series = data.map(p => p[key + 'Value'])
        data = { categories, series }
        return data
    }
}

export default useChartHelper
