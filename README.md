# 📈 Tencent HSI Candlestick Chart

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![ECharts](https://img.shields.io/badge/ECharts-5.4.3-red.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)

**Một ứng dụng web hiện đại hiển thị biểu đồ nến tương tác cho chỉ số Hang Seng của Tencent**

[Demo Trực Tiếp](#-demo-trực-tiếp) • [Tính Năng](#-tính-năng-chính) • [Cài Đặt](#-cài-đặt) • [Hướng Dẫn](#-hướng-dẫn-sử-dụng)


</div>

---

## 🌟 Tính năng chính

<table>
<tr>
<td width="50%">

### 📊 **Biểu đồ chuyên nghiệp**
- ✅ Biểu đồ nến OHLC tương tác
- ✅ Volume chart tích hợp
- ✅ Zoom và Pan mượt mà
- ✅ Tooltip chi tiết

</td>
<td width="50%">

### 🎨 **Giao diện hiện đại**
- ✅ Responsive design
- ✅ Gradient background
- ✅ Shadow effects
- ✅ Mobile-friendly

</td>
</tr>
</table>

---

## 🚀 Demo trực tiếp

```bash
# Clone repository
git clone https://github.com/yourusername/tencent-hsi-chart.git

# Mở file trong trình duyệt
open Tp.html
```

> 💡 **Tip**: Sử dụng Live Server extension trong VS Code để có trải nghiệm tốt nhất

---

## 🛠️ Công nghệ sử dụng

<div align="center">

| Technology | Version | Purpose |
|------------|---------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | 5 | Cấu trúc semantic |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | 3 | Styling hiện đại |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | ES6+ | Logic xử lý |
| ![ECharts](https://img.shields.io/badge/ECharts-AA344D?style=flat&logo=apache&logoColor=white) | 5.4.3 | Visualization |

</div>

---

## 📁 Cấu trúc dự án

```
tencent-hsi-chart/
├── 📄 Tp.html          # File chính chứa toàn bộ ứng dụng
├── 📖 README.md        # Tài liệu hướng dẫn
└── 📷 assets/          # Hình ảnh demo (optional)
```

---

## ⚡ Cài đặt

### Yêu cầu hệ thống
- Trình duyệt hiện đại (Chrome, Firefox, Safari, Edge)
- Kết nối internet (để load ECharts CDN)

### Cách chạy
1. **Download/Clone** repository
2. **Mở** file `Tp.html` trong trình duyệt
3. **Enjoy!** 🎉

---

## 📋 Phân tích chi tiết code

<details>
<summary><b>🏗️ HTML Structure</b></summary>

```html
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
```

**💡 Lý do thiết kế:**
- Container chính để căn giữa và giới hạn chiều rộng
- Phân chia rõ ràng thành 3 phần: header, chart, info
- Semantic HTML giúp SEO và accessibility tốt hơn

</details>

<details>
<summary><b>🎨 CSS Styling</b></summary>

### Layout và Typography
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Container Design
```css
.container {
    max-width: 1200px;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
```

**🔍 Chi tiết:**
- **Font stack**: Chọn font system phổ biến cho hiệu suất tốt
- **Gradient background**: Tạo hiệu ứng thị giác hấp dẫn
- **Max-width**: Đảm bảo readability trên màn hình lớn
- **Border-radius**: Thiết kế modern với góc bo tròn

</details>

<details>
<summary><b>⚙️ JavaScript - ECharts Configuration</b></summary>

### Chart Initialization
```javascript
const chartDom = document.getElementById('chartContainer');
const myChart = echarts.init(chartDom);
```

### Grid Layout System
```javascript
grid: [
    { left: '10%', right: '10%', height: '60%' },      // Main chart
    { left: '10%', right: '10%', top: '75%', height: '15%' } // Volume
]
```

### Data Structure - OHLC
```javascript
data: [
    [66.88, 68.00, 66.82, 68.00],  // [Open, Close, Low, High]
    [70.42, 67.75, 67.75, 70.75],
    // ...
]
```

**📊 Cấu trúc dữ liệu:**
- `Index 0 (Open)`: Giá mở cửa
- `Index 1 (Close)`: Giá đóng cửa  
- `Index 2 (Low)`: Giá thấp nhất trong ngày
- `Index 3 (High)`: Giá cao nhất trong ngày

</details>

---

## 🎯 Hướng dẫn sử dụng

### 🖱️ Điều hướng biểu đồ

| Action | Method | Description |
|--------|--------|-------------|
| **Zoom In/Out** | Cuộn chuột | Phóng to/thu nhỏ biểu đồ |
| **Pan** | Kéo chuột | Di chuyển view |
| **Slider** | Thanh trượt dưới | Điều hướng timeline |
| **Reset** | Double-click | Về view ban đầu |

### 📊 Đọc biểu đồ

<div align="center">

| 🟢 **Nến Xanh** | 🔴 **Nến Đỏ** | 📈 **Volume** |
|:---:|:---:|:---:|
| Giá tăng | Giá giảm | Khối lượng GD |
| Close > Open | Close < Open | Màu xanh nhạt |

</div>

### 💡 Tooltip Information
Di chuột qua biểu đồ để xem:
- 📅 Ngày giao dịch
- 💰 Giá OHLC chi tiết  
- 📊 Volume tương ứng

---

## 🚀 Roadmap

- [ ] **Phase 1**: Thêm Moving Averages (MA5, MA20)
- [ ] **Phase 2**: Real-time data với WebSocket
- [ ] **Phase 3**: Technical indicators (RSI, MACD)
- [ ] **Phase 4**: Drawing tools và alerts
- [ ] **Phase 5**: API integration và database

---

## 📱 Screenshots

<details>
<summary><b>🖥️ Desktop View</b></summary>

![Desktop](https://via.placeholder.com/800x500/667eea/white?text=Desktop+View)

</details>

<details>
<summary><b>📱 Mobile View</b></summary>

<div align="center">
<img src="https://via.placeholder.com/400x600/667eea/white?text=Mobile+View" alt="Mobile View" width="300">
</div>

</details>

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
```bash
# Clone the repo
git clone https://github.com/yourusername/tencent-hsi-chart.git

# Open with Live Server
# Hoặc python -m http.server 8000
```

### Coding Standards
- ✅ ES6+ JavaScript
- ✅ Semantic HTML5
- ✅ Mobile-first CSS
- ✅ Comment code in Vietnamese

## 👨‍💻 Author

<div align="center">

**TKayyy**


</div>

---

