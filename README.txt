IZHAR PAVERS - FINAL PDF + OWNERSHIP TRANSFER FIX

- index.html: fixed PDF cell fitting/Rate (PKR) overflow and atomic ownership transfer.
- firestore.rules: transfer finalization uses getAfter() so the authorization change and accepted request are validated as one atomic write.
- Login is required for persistent quotation saving.

Deployment:
1. Replace the GitHub files with the contents of this folder.
2. Publish the updated firestore.rules in Firebase Console.
3. Hard-refresh/reopen the site after deployment.
