import { TextInput, PasswordInput, Button } from "@mantine/core";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LoginInput, loginSchema } from "../models/auth";
import { apiProvider } from "../network/apiProvider";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { MdLogin } from "react-icons/md";
import { Variants, motion } from "framer-motion";
import { Role } from "../utils/enum";
import { IconClipboardText } from "@tabler/icons-react";

const loginVariant: Variants = {
  initial: {
    y: -300,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

function Login() {
  const [loading, setLoading] = useState(false);
  localStorage.clear();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const form = useForm<LoginInput>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(loginSchema),
    validateInputOnChange: true,
  });

  async function onSubmit(val: typeof form.values) {
    setLoading(true);
    const response = await apiProvider.login({
      email: val.email,
      password: val.password,
    });

    if (response?.status) {
      const data = response?.data;

      authContext?.login(data);

      const roleId = response?.data?.user?.role?.id;

      if (roleId == Role.SuperAdmin || roleId == Role.Admin)
        navigate("/dashboard");
      else {
        navigate("/user");
      }
    }
    setLoading(false);
  }

  return (
    <main className="background-pattern flex min-h-dvh min-w-full items-center justify-center">
      <motion.div
        variants={loginVariant}
        initial="initial"
        animate="animate"
        className="w-full space-y-2 rounded-md max-sm:px-4 md:w-1/2 xl:w-3/12"
      >
        <motion.div className="flex items-center justify-center gap-2 rounded-md bg-gray-500 px-2 py-6 text-2xl text-gray-100 shadow-lg">
          <IconClipboardText className="rotate-12 text-4xl" />
          <h2 className="font-bold">Quiz App</h2>
        </motion.div>
        <motion.div
          variants={loginVariant}
          className="flex-1 space-y-2 rounded-lg bg-gray-50 px-8 pb-10 pt-10 shadow-md"
        >
          <h1 className="mb-3 text-xl font-medium text-gray-700">
            Please log in to continue...
          </h1>
          <div className="w-full">
            <form
              onSubmit={form.onSubmit(onSubmit)}
              className="space-y-4 text-gray-600"
            >
              <TextInput
                label="Email"
                withAsterisk
                radius="md"
                size="md"
                placeholder="jhondoe@gmail.com"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                label="Password"
                withAsterisk
                radius="md"
                size="md"
                placeholder="********"
                {...form.getInputProps("password")}
              />

              <Button
                radius={"md"}
                className="flex h-10 cursor-pointer items-center justify-center rounded-lg border-none  px-4 text-sm font-medium text-white transition-colors  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-95  aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                type="submit"
                loading={loading}
                fullWidth
                style={{
                  backgroundColor: "rgb(107 114 128)",
                }}
              >
                <div className="flex items-center justify-center gap-1">
                  <h4 className="text-base font-semibold">Log in</h4>
                  <MdLogin className="h-5 w-5 text-gray-50" />
                </div>
              </Button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Login;
