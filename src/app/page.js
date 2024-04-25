'use client'
import Image from "next/image";
import logoVerde from "../../public/logoverde.png"
import Link from "next/link";

export default function Home() {
  return (
    <main className="col-span-8 bg-grisoscuro/50  h-[calc(100vh-135px)] flex justify-center items-center border border-verdelima/50">
      <section className="relative w-[95%] max-w-[400px] mx-auto bg-grisoscuro/80 rounded-lg py-24 border border-verdelima">
        <Image src={ logoVerde } alt="Logo Digital Money" className="w-32 mx-auto animate-pulse"/>
        <h3 className="text-center mb-4 text-verdelima"> Digital Money House </h3>
        <div className="flex flex-row items-center justify-center gap-x-8">

          <Link href={"/loguin"} className="bg-transparent p-2 w-[120px] text-center rounded-lg border border-verdelima text-verdelima text-sm  font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-200" > 
            Ingresar
          </Link>

          <Link href={"/register"} className="p-2 w-[120px] text-center rounded-lg border border-verdelima bg-verdelima text-sm font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-200"> 
            Crear cuenta
          </Link>
          
        </div>
          <Link href="/dashboard" className="absolute top-0 right-0 p-2 text-white bg-red-500 rounded-lg"> 
        Dashboard 
        </Link>
      </section>
    </main>
  );
}
