# Resend Email Setup Guide

## ✅ Current Status
- ✅ Email templates ready
- ✅ API integration complete
- ⏳ **Waiting for Resend API key**

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Resend Account
1. Go to: https://resend.com/signup
2. Sign up with your email or GitHub
3. Verify your email

### Step 2: Get API Key
1. Login to Resend dashboard
2. Go to: https://resend.com/api-keys
3. Click **"Create API Key"**
4. Name it: `EVAZ-MS Production`
5. **Copy the key** (starts with `re_...`)

### Step 3: Configure Environment
1. Open `.env.local` file in this project
2. Replace `re_YOUR_API_KEY_HERE` with your actual API key
3. Save the file

```bash
# .env.local
RESEND_API_KEY=re_actual_key_from_resend_dashboard
EMAIL_TO=ehwazms@gmail.com
EMAIL_FROM=onboarding@resend.dev  # Use this for testing
```

### Step 4: Restart Development Server
```bash
npm run dev
```

---

## 🧪 Testing Email

### Test the Contact Form:
1. Start the dev server: `npm run dev`
2. Open: http://localhost:3000
3. Fill out the contact form
4. Submit
5. **Check your email:** ehwazms@gmail.com

### Expected Result:
✅ Beautiful email with:
- Teal gradient header
- Contact details in table format
- "Click to call" button
- Professional formatting

---

## 🌐 Production Domain Setup (Optional)

For professional emails from `@evaz-ms.com` instead of test domain:

### Step 1: Add Domain in Resend
1. Go to: https://resend.com/domains
2. Click **"Add Domain"**
3. Enter: `evaz-ms.com`

### Step 2: Add DNS Records
Resend will provide 3 DNS records. Add them to your domain registrar:

**SPF Record:**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
```

**DKIM Record:**
```
Type: TXT
Name: resend._domainkey
Value: [Resend will provide this]
```

**DMARC Record (Optional):**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@evaz-ms.com
```

### Step 3: Wait for Verification
- Usually takes 5-30 minutes
- You'll see "Verified" status in Resend dashboard

### Step 4: Update .env.local
```bash
EMAIL_FROM=noreply@evaz-ms.com
```

---

## 📊 Free Tier Limits

Resend Free Plan:
- ✅ **3,000 emails per month**
- ✅ **100 emails per day**
- ✅ Full API access
- ✅ Email analytics

For EVAZ-MS, this should be more than enough!

---

## 🔧 Troubleshooting

### Email not sending?
1. Check `.env.local` has correct API key
2. Restart dev server after changing `.env.local`
3. Check Resend dashboard for error logs

### Email goes to spam?
1. Verify your domain (see Production Setup above)
2. Add SPF, DKIM records
3. Test with mail-tester.com

### API key error?
1. Make sure key starts with `re_`
2. No extra spaces in `.env.local`
3. Key must be from https://resend.com/api-keys

---

## 📞 Next Steps

1. ✅ Get Resend API key
2. ✅ Add to `.env.local`
3. ✅ Test form submission
4. ⏳ (Optional) Verify domain for production
5. ⏳ (Optional) Add Telegram notifications

---

## 💡 Tips

- Keep your API key secret (never commit to git)
- `.env.local` is already in `.gitignore` ✅
- Test with your personal email first
- Monitor usage in Resend dashboard
- Set up domain before going live

---

**Need help?** Share any error messages and I'll help you fix them!
