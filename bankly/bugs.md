Bug #1 (routes/users.js, line 21): The function did not return only basic info, it returned everything. I removed the phone and email from the object for each user before returning it. Test for this bug is line 109

Bug #2 (models/user.js, line 115): It should throw a new Express Error if no user is found. The keyword "throw" was missing from that line. 

Bug #3 (routes/users.js, line 67): The middleware required the user to be logged in AND admin, when in order to update their info the user needs to be logged in as themselves OR admin. I removed requireAdmin and kept requireLogin. The if statement on line 70 will look to see if the username of the logged in user matches the username of the user trying to be updated AND it looks to see if the logged in user is admin. If not, it throws a 401. Otherwise, the user will be able to update. 

Bug #4 (routes/users.js, line 78): Users were able to update invalid fields, such as username, password, or admin. I created two different methods to determining if the user was trying to update invalid fields. For the first method, I looked at the keys and if the keys were username, password, or admin then I threw a new error. For the second method, I created an array of valid fields and then looked through the keys of fields sent in the request. If any of the keys were not included in the array of valid fields, then I threw a new error. 

Bug #5 (routes/users.js, line 115): I noticed there wasn't a test for trying to delete a user with an invalid username. When I wrote the test I kept getting an UnhandledPromiseRejection error. I realized that the keyword await was missing, which I added back in.

Bug #6 (routes/auth.js, line 41): Similar, to bug #5. I noticed there wasn't a test to authenticate logging in with an invalid username or password. The keyword await was missing, which I added back in.