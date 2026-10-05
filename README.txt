IZHAR PAVERS - FINAL FIX

index.html: existing quotation/invoice app preserved; PKR/table spacing improved; Admin Management/Admin list UI removed; Transfer Ownership retained.
firestore.rules: ownership transfer rules aligned with the app and allow the current Owner to safely replace an older pending request for the same Gmail.

Firebase:
1. Publish firestore.rules in Firebase Console > Firestore Database > Rules.
2. Deploy the ZIP/site files.
3. Ensure Google Authentication is enabled.
4. Bootstrap Owner in this version: talhakhan14747@gmail.com. Change it in BOTH index.html and firestore.rules only if that is not the real Owner Gmail.

Transfer flow: Current Owner sends request -> target Gmail signs in -> Accept Ownership -> atomic batch changes Owner and marks request accepted -> previous Owner is removed from Owner/Admin/authorized access.
