
import { hasMaxLengthMessage, hasMinLengthMessage, hasRequired } from '@/lib/common/common.validators';
import * as z from 'zod';

export const LoginSchema = z.object({
    username: z.string().min(2, {
        message: hasMinLengthMessage
    }).max(30, {
        message: hasMaxLengthMessage
    }).regex(/^[^\s]*$/, "Dato Inválido"),
    password: z.string().min(1, {
        message: hasRequired
    }).max(50, {
        message: hasMaxLengthMessage
    }).regex(/^[^\s]*$/, "Dato Inválido")
})