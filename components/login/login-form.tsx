import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoginSchema } from "@/schema/login.schema"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { hasOnlyLettersAndDot } from "@/lib/common/common.validators"
import { Box, EyeIcon, EyeOffIcon } from "lucide-react"
import { createElement, useState } from "react"
import axios from "axios"
import { showToast } from "@/lib/showToast"
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // setLoading(true);

        console.log(values);

        const config = {
            method: 'post',
            url: 'http://localhost:8081/api/auth/login',//api edi
            // url: 'http://172.16.90.114:9020/api/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: values.username,
                password: values.password,
            }
        };

        axios(config)
            .then(async function (response) {
                if (response.data.status === 'SUCCESS') {
                    //setToken(response.data.data);

                    // Cookies.set('token', response.data.data);

                    // console.log("SE GUEARDA EL TOKEN: " + Cookies.get('token'))

                    // try {
                    //     const initSessionResp = await instaceAxios.post('/initSesion', null, { headers: { 'token': response.data.data } });
                    //     if (initSessionResp.data.status === "SUCCESS") {
                    //         profile(initSessionResp.data.perfil);
                    //         username(values.username);
                    //         transaction(initSessionResp.data.transaction);
                    //         const MenuList = initSessionResp.data as MenusList;
                    //         menuList(MenuList);
                    //         form.reset();
                    //         router.push('/home');
                    //     } else {
                    //         try {
                    //             const logoutResponse = await instaceAxios.post('/closeSesion', null, { headers: { 'token': response.data.data } });
                    //             if (logoutResponse.data.status === "SUCCESS") {
                    //                 const MenuList = logoutResponse.data as any;
                    //                 //setToken(null);
                    //                 Cookies.remove('token');
                    //                 form.handleSubmit(onSubmit)
                    //             } else {
                    //                 showToast({
                    //                     type: "error",
                    //                     message: "Error al iniciar sesión"
                    //                 });
                    //             }
                    //         } catch (error: any) {
                    //             showToast({
                    //                 type: "error",
                    //                 message: error?.response?.data?.data || error.code
                    //             });
                    //             Cookies.remove('token');
                    //             //setToken(null);
                    //         }
                    //     }
                    // } catch (error: any) {
                    //     showToast({
                    //         type: "error",
                    //         message: error?.response?.data?.data || error.code
                    //     });
                    // }
                    showToast({
                        type: "success",
                        message: "Incio de Sesión exitoso"
                    });
                } else {
                    showToast({
                        type: "error",
                        message: "Error al iniciar sesión",
                    })
                }
            })
            .catch(function (error) {
                showToast({
                    type: "error",
                    message: error?.response?.data?.data || error.code
                })

            })
            .finally(function () {
                // setLoading(false);
            });
    }

    const form = useForm<z.infer<typeof LoginSchema>>({
        mode: "onChange",
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Inicio de Sesión</CardTitle>
          {/* <CardDescription>
            Ingresa tu correo elec
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Usuario</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ingrese su usuario"
                                        onKeyDown={hasOnlyLettersAndDot}
                                        maxLength={30} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid gap-3">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    {/* <Box className="relative"> */}
                                    <div className="relative">
                                        <Input
                                            type={passwordVisibility ? "text" : "password"}
                                            placeholder="Ingrese su contraseña"
                                            maxLength={50}
                                            {...field}
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-500 hover:text-gray-700"
                                            onClick={() => setPasswordVisibility(!passwordVisibility)}
                                        >
                                            {passwordVisibility ? (
                                            <EyeIcon className="h-5 w-5" />
                                            ) : (
                                            <EyeOffIcon className="h-5 w-5" />
                                            )}
                                        </div>
                                    </div>

                                    {/* </Box> */}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-3">
                <Button type="submit"
                    className="w-full"
                    // variant='daycohost_secondary'
                    disabled={!form.formState.isValid}>
                    {/* {loading && <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />}
                    {loading ? 'Cargando...' : 'Iniciar Sesión'} */}
                    Iniciar Sesión
                </Button>
                </div>
                </div>
                {/* <div className="mt-4 text-center text-sm">
                ¿No tienes una cuenta?{" "}
                <a href="#" className="underline underline-offset-4">
                    Regístrate
                </a>
                </div> */}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
