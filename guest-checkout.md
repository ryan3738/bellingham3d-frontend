# Plan to impliment guest checkout   

1. Create a device id cookie for user if they add an item to the cart but are not logged in.
   1.    Look for device id cookie
   2.    If no cookie, create a device-id using uuid function
   
2. When checking out if not logged in ask if they would like to:
   1. Create an account
   2. Sign in
   3. Proceed as a guest
3. If they decide to proceed as a guest 
   1. Ask for an email
   2. Create a user with no password using this contact email
   3. Log them in
4. Once logged in link guest cart items with logged in user.
5. Check-out will proceed as normal from this point on.
6. If the user tries to log in or create an account with this email address in the future they will have to perform a password reset and will then have access to this account.