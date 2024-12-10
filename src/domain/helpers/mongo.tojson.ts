export const toJSONTransform = () => ({
    transform: (doc: any, ret: any) => {
        ret.id = ret._id; // `_id`'yi `id` olarak yeniden adlandır
        delete ret._id;   // `_id`'yi kaldır
        delete ret.__v;   // `__v`'yi kaldır
        return ret;       // Güncellenmiş belgeyi döndür
    },
});