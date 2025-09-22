const option = {
  //Tiêu đề biểu đồ
  title: {
    text: '腾讯8月恒生指数',  // đoạn text
    left: 'center'      // canh lề giữa
  },

  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' }
  }, // dòng này là kiểu khi kéo chuột vào trong trục tọa độ thì nó sẽ hiển thị thông tin 

  //  Liên kết con trỏ giữa các trục
  axisPointer: {
    link: [{ xAxisIndex: 'all' }]
  },

  grid: [
    { left: '10%', right: '10%', height: '60%' },      // Grid chính cho candlestick
    { left: '10%', right: '10%', top: '75%', height: '15%' }  // Grid phụ cho volume
  ], // nó sẽ hiển thị 1 bảng thông tin khi kéo trỏ chuột tại vị trí nào đó

  // Trục X - Thời gian
  xAxis: [
    {
      // Trục X chính cho biểu đồ nến
      type: 'category',
      data: [
        '08-01', '08-04', '08-05', '08-06', '08-07', '08-08', 
        '08-11', '08-12', '08-13', '08-14', '08-15', '08-18', 
        '08-19', '08-20', '08-21', '08-22', '08-25', '08-26', 
        '08-27', '08-28', '08-29'
      ],
      scale: true,
      boundaryGap: false,
      axisLine: { onZero: false },
      splitLine: { show: false },
      min: 'dataMin',
      max: 'dataMax'
    },
    {
      // Trục X phụ cho volume (ẩn labels)
      type: 'category',
      gridIndex: 1,
      data: [
        '08-01', '08-04', '08-05', '08-06', '08-07', '08-08', 
        '08-11', '08-12', '08-13', '08-14', '08-15', '08-18', 
        '08-19', '08-20', '08-21', '08-22', '08-25', '08-26', 
        '08-27', '08-28', '08-29'
      ],
      axisTick: { show: false },
      axisLabel: { show: false }
    }
  ],

  // Trục Y - Giá trị
  yAxis: [
    {
      // Trục Y chính cho giá cổ phiếu
      scale: true,
      splitArea: { show: true }
    },
    {
      // Trục Y phụ cho volume (ẩn hoàn toàn)
      gridIndex: 1,
      splitNumber: 2,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false }
    }
  ],

  // 🔍 Tính năng zoom và cuộn
  dataZoom: [
    { 
      type: 'inside', 
      xAxisIndex: [0, 1], 
      start: 50, 
      end: 100 
    },  // Zoom bằng chuột
    { 
      show: true, 
      type: 'slider', 
      xAxisIndex: [0, 1], 
      top: '93%', 
      start: 50, 
      end: 100 
    }   // Thanh trượt
  ],

  // Dữ liệu biểu đồ
  series: [
    {
      // Biểu đồ nến [Open, Close, Low, High]
      name: 'Price',
      type: 'candlestick',
      data: [
        [66.88, 68.00, 66.82, 68.00],   [70.42, 67.75, 67.75, 70.75],
        [71.45, 70.04, 69.27, 71.75],   [73.00, 72.00, 72.00, 73.66],
        [72.40, 72.60, 71.72, 72.60],   [71.50, 71.50, 71.50, 71.50],
        [71.05, 71.60, 70.80, 72.44],   [71.16, 72.54, 71.15, 72.54], 
        [76.69, 75.00, 74.50, 77.10],   [74.36, 75.41, 74.36, 75.41],
        [74.51, 76.49, 74.51, 76.49],   [75.30, 75.00, 74.57, 75.38],
        [75.80, 75.51, 75.51, 76.28],   [75.48, 75.70, 75.03, 75.70],
        [76.20, 76.17, 75.91, 76.51],   [78.00, 77.00, 77.00, 78.00],
        [77.96, 78.48, 76.60, 79.20],   [78.38, 78.02, 76.60, 78.98],
        [78.52, 78.52, 78.52, 78.52],   [77.11, 78.36, 77.11, 78.45],
        [77.66, 77.66, 77.66, 77.66]
      ],
      itemStyle: {
        color: '#ec0000',        // 🔴 Màu đỏ cho nến giảm
        color0: '#00da3c',       // 🟢 Màu xanh cho nến tăng
        borderColor: '#8A0000',   // 🔴 Viền nến giảm
        borderColor0: '#008F28'   // 🟢 Viền nến tăng
      }
    },
    {
      // Biểu đồ volume
      name: 'Volume',
      type: 'bar',
      xAxisIndex: 1,   // Sử dụng trục X thứ 2
      yAxisIndex: 1,   // Sử dụng trục Y thứ 2
      data: [
        120000, 180000, 150000, 200000, 160000,
        80000,  130000, 170000, 220000, 100000,
        90000,  140000, 175000, 160000, 200000,
        250000, 220000, 180000, 150000, 170000,
        120000
      ],
      itemStyle: {
        color: '#7fbe9e'  // Màu xanh nhạt cho volume
      }
    }
  ]
};