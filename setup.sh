#!/bin/bash

# Script de instalación para Portafolio Audiovisual
echo "🎬 Instalando dependencias del Portafolio Audiovisual..."

# Navegar al directorio del proyecto
cd /Users/lcardenas/Documents/proyectos/v6/shipping/portafolio-audiovisual

# Limpiar node_modules y cache si existen
echo "🧹 Limpiando instalación previa..."
rm -rf node_modules package-lock.json

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Verificar que Swiper se instaló
if [ -d "node_modules/swiper" ]; then
    echo "✅ Swiper instalado correctamente"
else
    echo "❌ Error: Swiper no se instaló correctamente"
    echo "Intentando instalar Swiper manualmente..."
    npm install swiper --save
fi

echo ""
echo "✨ Instalación completada!"
echo ""
echo "Para iniciar el servidor de desarrollo, ejecuta:"
echo "  npm run dev"
echo ""
