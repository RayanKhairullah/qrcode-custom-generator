'use client';

import { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';

export default function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState('https://example.com');
  const [qrSize, setQrSize] = useState(200);
  const [darkColor, setDarkColor] = useState('#000000');
  const [lightColor, setLightColor] = useState('#FFFFFF');
  const [errorLevel, setErrorLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(30);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate QR Code with Logo
  useEffect(() => {
    const generateQRCode = async () => {
      if (!inputValue.trim() || !canvasRef.current) return;

      try {
        await QRCode.toCanvas(canvasRef.current, inputValue, {
          width: qrSize,
          margin: 2,
          color: {
            dark: darkColor,
            light: lightColor,
          },
          errorCorrectionLevel: errorLevel,
        });

        // Add logo if uploaded
        if (logoImage) {
          const img = new Image();
          img.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const logoWidth = logoSize;
            const logoHeight = logoSize;
            const x = (canvas.width - logoWidth) / 2;
            const y = (canvas.height - logoHeight) / 2;

            // Draw white background for logo
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(x - 5, y - 5, logoWidth + 10, logoHeight + 10);

            // Draw logo
            ctx.drawImage(img, x, y, logoWidth, logoHeight);
          };
          img.src = logoImage;
        }
      } catch (error) {
        console.error('Error generating QR Code:', error);
      }
    };

    generateQRCode();
  }, [inputValue, qrSize, darkColor, lightColor, errorLevel, logoImage, logoSize]);

  // Download QR Code
  const downloadQRCode = () => {
    if (!canvasRef.current) return;

    const link = document.createElement('a');
    link.href = canvasRef.current.toDataURL('image/png');
    link.download = `qrcode-${Date.now()}.png`;
    link.click();
  };

  // Handle logo upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setLogoImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Remove logo
  const removeLogo = () => {
    setLogoImage(null);
  };

  // Copy to Clipboard
  const copyToClipboard = () => {
    if (!canvasRef.current) return;

    canvasRef.current.toBlob((blob) => {
      if (blob) {
        const item = new ClipboardItem({ 'image/png': blob });
        navigator.clipboard.write([item]);
        alert('QR Code copied to clipboard!');
      }
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header - SEO Optimized */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Free QR Code Generator - Instant, No Watermark, No Ads
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Create custom QR codes instantly with colors and logos. No registration required, ad-free, and completely free to use.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Controls - Clean & Organized */}
          <div className="space-y-6">
            {/* Input Section */}
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Enter Text or URL
              </label>
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 dark:text-white text-sm resize-none"
                rows={3}
              />
            </div>

            {/* Basic Settings */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Size: {qrSize}px
                </label>
                <input
                  type="range"
                  min="100"
                  max="400"
                  value={qrSize}
                  onChange={(e) => setQrSize(Number(e.target.value))}
                  className="w-full accent-gray-900 dark:accent-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Error Correction
                </label>
                <select
                  value={errorLevel}
                  onChange={(e) => setErrorLevel(e.target.value as 'L' | 'M' | 'Q' | 'H')}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 dark:text-white text-sm"
                >
                  <option value="L">Low - 7% correction</option>
                  <option value="M">Medium - 15% correction</option>
                  <option value="Q">Quartile - 25% correction</option>
                  <option value="H">High - 30% correction</option>
                </select>
              </div>
            </div>

            {/* Color Settings */}
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Customize Colors
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={darkColor}
                    onChange={(e) => setDarkColor(e.target.value)}
                    className="w-10 h-10 rounded border border-gray-200 dark:border-gray-700 cursor-pointer"
                    aria-label="Dark color picker"
                  />
                  <div className="flex-1">
                    <label className="text-xs text-gray-600 dark:text-gray-400">Dark</label>
                    <input
                      type="text"
                      value={darkColor}
                      onChange={(e) => setDarkColor(e.target.value)}
                      className="w-full px-2 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-xs focus:outline-none dark:text-white"
                      aria-label="Dark color hex value"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={lightColor}
                    onChange={(e) => setLightColor(e.target.value)}
                    className="w-10 h-10 rounded border border-gray-200 dark:border-gray-700 cursor-pointer"
                    aria-label="Light color picker"
                  />
                  <div className="flex-1">
                    <label className="text-xs text-gray-600 dark:text-gray-400">Light</label>
                    <input
                      type="text"
                      value={lightColor}
                      onChange={(e) => setLightColor(e.target.value)}
                      className="w-full px-2 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-xs focus:outline-none dark:text-white"
                      aria-label="Light color hex value"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Add Custom Logo (Optional)
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none text-sm dark:text-white"
                aria-label="Upload logo for QR code"
              />
              {logoImage && (
                <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg flex items-center justify-between">
                  <span className="text-xs text-green-700 dark:text-green-400">Logo added</span>
                  <button
                    onClick={removeLogo}
                    className="text-xs bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-2 py-1 rounded"
                    aria-label="Remove logo"
                  >
                    Remove
                  </button>
                </div>
              )}
              {logoImage && (
                <div className="mt-3">
                  <label className="text-xs text-gray-600 dark:text-gray-400 block mb-2">
                    Logo Size: {logoSize}px
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={logoSize}
                    onChange={(e) => setLogoSize(Number(e.target.value))}
                    className="w-full accent-gray-900 dark:accent-white"
                    aria-label="Adjust logo size"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right: Preview & Actions */}
          <div className="flex flex-col items-center justify-start">
            {/* Preview */}
            <div className="w-full mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <canvas
                  ref={canvasRef}
                  className="max-w-full"
                  role="img"
                  aria-label="Generated QR code preview"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full space-y-2">
              <button
                onClick={downloadQRCode}
                className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors text-sm"
                aria-label="Download QR code as PNG image"
              >
                Download QR Code
              </button>
              <button
                onClick={copyToClipboard}
                className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm"
                aria-label="Copy QR code to clipboard"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>

        {/* Info Section - SEO Rich Content */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            About QR Code Generator
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
            <p>
              <strong className="text-gray-900 dark:text-white">Instant QR Code Creation:</strong> Generate QR codes instantly with our free online QR code generator. No watermark, no registration, and completely ad-free.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Custom Color Support:</strong> Design your QR code with custom colors - create colored QR codes that match your brand identity.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Logo Support:</strong> Add your custom logo to the center of your QR code for professional branding while maintaining full scannability.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">High Error Correction:</strong> Use &quot;High&quot; error correction (30%) for codes with logos to ensure scannability even if up to 30% is damaged.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Data Capacity:</strong> Store up to 4,296 alphanumeric characters in a single QR code. Perfect for URLs, text, contact information, and more.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Fast Download:</strong> Download your QR code instantly as high-resolution PNG - ready for print or digital use.
            </p>
          </div>

          <h3 className="text-md font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            Use Cases
          </h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
            <li>Website links and URL shortening</li>
            <li>Restaurant menus and food ordering</li>
            <li>WiFi password sharing</li>
            <li>Google Maps location links</li>
            <li>Digital business cards (vCard)</li>
            <li>WhatsApp and social media links</li>
            <li>Event registration and ticketing</li>
            <li>Product information and marketing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
