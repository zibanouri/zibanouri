// src/components/Contact.tsx
const Contact = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-4xl mx-auto text-center space-y-10">


                <h2 className="text-4xl font-bold text-slate-900">تماس با من</h2>
                <div className="w-24 h-1 bg-slate-300 mx-auto rounded-full"></div>
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200 max-w-2xl mx-auto space-y-6">

                    <p className="text-lg text-slate-700 leading-relaxed">
                        اگر سوالی داری، پروژه‌ای مدنظرته یا فقط می‌خوای گپی بزنیم
                    </p>

                    <div className="space-y-4 text-slate-800">
                        <div>
                            <div>ایمیل:</div>{" "}
                            <a
                                href="mailto:zn.zibanouri@gmail.com"
                                className="text-slate-600 hover:text-slate-900 underline hover:no-underline transition"
                            >
                                zn.zibanouri@gmail.com
                            </a>
                            <br />
                            <div>لینکدین:</div>
                            <a
                                href="https://www.linkedin.com/in/ziba-nouri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-slate-900 underline hover:no-underline transition"
                            >
                                linkedin.com/in/ziba-nouri
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/ziba-nouri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-slate-900 underline hover:no-underline transition"
                            >
                            </a>
                            <div>گیتهاب</div>
                            <a
                                href="https://github.com/zibanouri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-slate-900 underline hover:no-underline transition"
                            >
                                https://github.com/zibanouri
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/ziba-nouri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-slate-900 underline hover:no-underline transition"
                            >
                            </a>
                            
                        </div>
                    </div>

                    <div className="pt-4">
                        <a
                            href="mailto:your.email@example.com"
                            className="inline-block px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition"
                        >تماس با من
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// <Card>
//   <CardHeader>
//     <CardTitle>Card Title</CardTitle>
//     <CardDescription>Card Description</CardDescription>
//     <CardAction>Card Action</CardAction>
//   </CardHeader>
//   <CardContent>
//     <p>Card Content</p>
//   </CardContent>
//   <CardFooter>
//     <p>Card Footer</p>
//   </CardFooter>
// </Card>