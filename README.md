Tencent HSI Candlestick Chart
Một ứng dụng web hiện đại hiển thị biểu đồ nến (candlestick) tương tác cho chỉ số Hang Seng của Tencent trong tháng 8, được xây dựng với ECharts và thiết kế responsive.
🌟 Tính năng chính
Biểu đồ nến tương tác: Hiển thị dữ liệu OHLC (Open, High, Low, Close) với màu sắc trực quan
Biểu đồ volume: Khối lượng giao dịch được hiển thị dưới biểu đồ chính
Zoom và Pan: Phóng to/thu nhỏ và di chuyển biểu đồ một cách mượt mà
Tooltip chi tiết: Hiển thị thông tin đầy đủ khi hover
Responsive Design: Tự động điều chỉnh theo kích thước màn hình
Giao diện hiện đại: Gradient background và shadow effects
🚀 Demo trực tiếp
Mở file Tp.html trong trình duyệt để xem demo.
📁 Cấu trúc dự án
├── Tp.html          # File chính chứa toàn bộ ứng dụng
└── README.md        # Tài liệu hướng dẫn

🛠️ Công nghệ sử dụng
HTML5: Cấu trúc semantic và responsive
CSS3: Styling hiện đại với flexbox và gradient
JavaScript (ES6+): Logic xử lý biểu đồ
ECharts 5.4.3: Thư viện biểu đồ mạnh mẽ từ Apache
📋 Phân tích chi tiết code
1. HTML Structure

<div class="container">
    <div class="header">
        <!-- Header với title và mô tả -->
    </div>
    <div id="chartContainer">
        <!-- Container chứa biểu đồ ECharts -->
    </div>
    <div class="info">
        <!-- Hướng dẫn sử dụng và legend -->
    </div>
</div>

Lý do thiết kế như vậy:
Container chính để căn giữa và giới hạn chiều rộng
Phân chia rõ ràng thành 3 phần: header, chart, info
Semantic HTML giúp SEO và accessibility tốt hơn
2. CSS Styling
Layout và Typography
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

Font stack: Chọn font system phổ biến cho hiệu suất tốt
Gradient background: Tạo hiệu ứng thị giác hấp dẫn
Container Design
.container {
    max-width: 1200px;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

Max-width: Đảm bảo readability trên màn hình lớn
Border-radius: Thiết kế modern với góc bo tròn
Box-shadow: Tạo độ sâu và tách biệt khỏi background
Responsive Grid
.legend {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

Flexbox: Layout linh hoạt, tự động wrap trên mobile
Gap: Khoảng cách đều giữa các phần tử
3. JavaScript - ECharts Configuration
Chart Initialization
const chartDom = document.getElementById('chartContainer');
const myChart = echarts.init(chartDom);

Lý do: ECharts cần DOM element để render, init() tạo instance chart.
Grid Layout System
grid: [
    { left: '10%', right: '10%', height: '60%' },      // Main chart
    { left: '10%', right: '10%', top: '75%', height: '15%' } // Volume
]

Tại sao thiết kế như vậy:
2 grid riêng biệt: Cho phép hiển thị price và volume độc lập
60% + 15%: Tỷ lệ vàng, price chart chiếm không gian chính
10% margin: Đảm bảo chart không sát viền
Data Structure - OHLC
data: [
    [66.88, 68.00, 66.82, 68.00],  // [Open, Close, Low, High]
    [70.42, 67.75, 67.75, 70.75],
    // ...
]

Cấu trúc dữ liệu:
Index 0 (Open): Giá mở cửa
Index 1 (Close): Giá đóng cửa
Index 2 (Low): Giá thấp nhất trong ngày
Index 3 (High): Giá cao nhất trong ngày
Color Coding Logic
itemStyle: {
    color: '#ec0000',        // Nến giảm (đỏ)
    color0: '#00da3c',       // Nến tăng (xanh)
    borderColor: '#8A0000',  // Viền nến giảm
    borderColor0: '#008F28'  // Viền nến tăng
}

Quy tắc màu sắc:
Xanh (color0): Close > Open (tăng giá)
Đỏ (color): Close < Open (giảm giá)
Border: Màu đậm hơn để tạo contrast
Advanced Features
Zoom & Pan Configuration:
dataZoom: [
    { type: 'inside', xAxisIndex: [0, 1], start: 50, end: 100 },
    { type: 'slider', xAxisIndex: [0, 1], top: '93%', start: 50, end: 100 }
]

inside: Zoom bằng chuột wheel
slider: Thanh trượt điều khiển
xAxisIndex [0,1]: Áp dụng cho cả 2 chart (price + volume)
start: 50: Hiển thị 50% cuối dữ liệu (focus vào recent data)
Tooltip Enhancement:
tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' },
    backgroundColor: 'rgba(0,0,0,0.8)',
    textStyle: { color: '#fff' }
}

trigger: 'axis': Hiển thị data của tất cả series cùng lúc
axisPointer: 'cross': Crosshair để đọc giá trị chính xác
Dark theme: Dễ đọc trên background trắng
Responsive Handler:
window.addEventListener('resize', function() {
    myChart.resize();
});

Tại sao cần thiết: ECharts không tự động resize, cần manual trigger khi window thay đổi kích thước.
🎯 Hướng dẫn sử dụng
Điều hướng biểu đồ
Zoom In/Out: Cuộn chuột lên/xuống
Pan: Giữ và kéo chuột để di chuyển
Slider: Sử dụng thanh trượt dưới cùng
Reset: Double-click để về view ban đầu
Đọc biểu đồ
Nến xanh: Giá đóng cửa cao hơn giá mở cửa (tăng)
Nến đỏ: Giá đóng cửa thấp hơn giá mở cửa (giảm)
Thanh volume: Màu xanh nhạt, thể hiện khối lượng giao dịch
Tooltip Information
Di chuột qua biểu đồ để xem:
Ngày giao dịch
Giá OHLC chi tiết
Volume tương ứng

Được phát triển với ❤️ bởi [Tên của bạn]

