import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // console.log("Pathname :" , request.nextUrl.pathname.startsWith('/services'))
    const dummyUserData = {
      role: "admin",
      email:"test@admin.com"
    }
    let isAdmin = dummyUserData.role == "admin"
    let isServicesPage = request.nextUrl.pathname.startsWith('/services')
    if(isServicesPage && !isAdmin)
       return NextResponse.redirect(new URL('/logIn', request.url))
  return NextResponse.next();
}
 
// redirect and rewrite er moddhe difference holo user jei route e jete chay setatei jete parbe