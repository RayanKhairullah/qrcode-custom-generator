# QR Code Custom Generator

A free, fast, and feature-rich QR code generator built with Next.js and React. Create instant QR codes with **no watermark, no ads, no registration required**.

![QR Code Generator](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 Customization
- **Custom Colors**: Design QR codes with your own dark and light colors
- **Adjustable Size**: Generate QR codes from 100px to 400px
- **Custom Logo**: Add your brand logo to the center of the QR code
- **Logo Sizing**: Adjust logo size (20-100px) for perfect branding

### 📊 Advanced Options
- **Error Correction Levels**: Choose from 4 levels (7%, 15%, 25%, 30%)
- **High Capacity**: Store up to 4,296 alphanumeric characters
- **Multiple Format Support**: Text, URLs, contact info, WiFi credentials, and more

### ⚡ Performance & UX
- **Instant Generation**: Real-time QR code preview
- **No Ads**: Completely ad-free experience
- **No Watermark**: Download clean QR codes
- **No Registration**: Start using immediately
- **Fast Download**: High-resolution PNG output
- **Copy to Clipboard**: Easy sharing option
- **Dark Mode Support**: Modern UI with dark theme

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/qrcode-custom-generator.git
cd qrcode-custom-generator
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Usage

### Basic QR Code Generation
1. Enter your text or URL in the input field
2. Click "Download QR Code" to save as PNG
3. Or click "Copy to Clipboard" to share instantly

### Customize Colors
1. Use the color pickers to select dark and light colors
2. Or enter hex color codes directly (#000000, #FFFFFF, etc.)
3. Changes apply in real-time

### Add Logo to QR Code
1. Click "Upload logo for QR code"
2. Select a PNG or JPG image (recommended: square format)
3. Adjust logo size with the slider (20-100px)
4. Download the QR code with your logo embedded

### Error Correction
- **Low (7%)**: Minimal error correction for simple codes
- **Medium (15%)**: Balanced performance and capacity (default)
- **Quartile (25%)**: Good protection from damage
- **High (30%)**: Maximum protection, recommended for codes with logos

## 📋 Use Cases

Perfect for:
- 🌐 **Website Links** - Share URLs instantly
- 🍔 **Restaurant Menus** - Digital menu distribution
- 📱 **WiFi Sharing** - Quick WiFi credential sharing
- 🗺️ **Location Sharing** - Google Maps integration
- 💳 **Business Cards** - Digital vCard generation
- 💬 **Social Media** - WhatsApp, Instagram links
- 🎟️ **Events** - Ticket distribution
- 📦 **Product Info** - Marketing materials

## 🛠️ Technologies Used

- **Next.js 15** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **qrcode** - QR code generation library
- **ESLint** - Code quality

## 📦 Building for Production

```bash
npm run build
npm run start
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js and deploys

```bash
npm run build  # Test build locally first
```

### Other Deployment Options
- Docker
- AWS Amplify
- Netlify
- Firebase

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality.

### Customizing Defaults
Edit `app/components/QRCodeGenerator.tsx`:

```typescript
const [inputValue, setInputValue] = useState('https://example.com');
const [qrSize, setQrSize] = useState(200);  // Default size in pixels
const [darkColor, setDarkColor] = useState('#000000');  // Default dark color
const [lightColor, setLightColor] = useState('#FFFFFF');  // Default light color
const [errorLevel, setErrorLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');  // Default error correction
```

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop computers
- 🖥️ Large screens

## ♿ Accessibility

- Full keyboard navigation support
- ARIA labels on all interactive elements
- Semantic HTML structure
- High contrast support
- Dark mode support

## 📊 SEO Optimized

- Meta tags for search engines
- Open Graph for social sharing
- JSON-LD structured data
- Semantic heading structure
- Keyword-rich content

## 🔒 Privacy & Security

- 🔒 All processing done client-side
- 🔒 No data sent to external servers
- 🔒 No tracking or analytics
- 🔒 No cookies or personal data collection
- 🔒 Free and open source

## 📈 Performance

- ⚡ Instant QR code generation
- ⚡ Optimized file size (~150KB)
- ⚡ Fast page load time
- ⚡ No external API calls
- ⚡ Works offline (after initial load)

## 🐛 Known Limitations

- Maximum QR code size: 400px
- Logo must be uploaded as image file
- QR codes with logos require "High" error correction for reliability
- Generated QR code size depends on data quantity

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋 Support

For issues, questions, or suggestions, please [open an issue](https://github.com/yourusername/qrcode-custom-generator/issues) on GitHub.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [QR Code Wikipedia](https://en.wikipedia.org/wiki/QR_code)
- [QRCode.js Library](https://davidshimjs.github.io/qrcodejs/)

## 🎯 Roadmap

Future features in development:
- [ ] Dynamic QR codes with tracking
- [ ] Batch QR code generation
- [ ] QR code analytics
- [ ] Advanced design options (rounded corners, patterns)
- [ ] Multiple output formats (SVG, PDF)
- [ ] URL history and saved codes
- [ ] Mobile app versions

## ⭐ Show Your Support

If you find this project useful, please give it a star! It helps others discover the project.

---

**Made with ❤️ by QR Code Generator Team**

Last Updated: June 2026
