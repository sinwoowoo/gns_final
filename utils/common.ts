export function cmnAlert(str: string): void {
    if (process.client) {
        alert(str);
    }
}

// popup, layer v-if 제어
export const toggleLayer = <T extends Record<string, boolean>>(layers: T, layerName: keyof T) => {
    layers[layerName] = !layers[layerName] as T[keyof T];
    // 중복 layer 확인
    const hasOtherTrueLayers = Object.entries(layers).some(([key, value]) => key !== layerName && value);
    
    if (!layers[layerName] && !hasOtherTrueLayers) {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
}