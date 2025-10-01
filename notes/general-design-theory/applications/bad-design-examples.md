# Examples of Bad/Shitty Design According to Johnny SOP

Learning from failures is often more valuable than studying successes. This document catalogs design failures and the lessons they teach.

## Purpose

This is a reference of what NOT to do. Each example should include:

1. What was done wrong
2. Why it's wrong
3. How to fix it
4. The underlying principle being violated

---

## Common Design Sins

### Sin #1: Illegible Text

**Examples to Add:**
- Light gray text on white background
- Text over busy background images without overlay
- Font sizes too small for mobile
- Low contrast that fails WCAG standards

**Why It's Wrong:**
If they can't read it, the design has completely failed its purpose.

**How to Fix:**
- Use contrast checker tools (minimum 4.5:1 for body text)
- Add dark overlay to background images
- Minimum 16px font size for body copy
- Test on actual devices

**Principle Violated:** Clarity over cleverness, function over form

---

### Sin #2: Unclear Call-to-Action

**Examples to Add:**
- Multiple competing CTAs with equal visual weight
- Vague button text ("Learn More", "Click Here")
- CTA buried below the fold with no indication to scroll
- Button that doesn't look clickable

**Why It's Wrong:**
If the user doesn't know what to do next, they'll do nothing.

**How to Fix:**
- One primary CTA per screen/section
- Specific, action-oriented text ("Start Free Trial", "Download the Guide")
- Make it visually prominent (color, size, placement)
- Design buttons to look clickable (shadows, borders, hover states)

**Principle Violated:** Respect the user's time, clarity over cleverness

---

### Sin #3: Mobile-Hostile Design

**Examples to Add:**
- Tiny tap targets that require zooming
- Horizontal scrolling
- Pop-ups that can't be closed on mobile
- Text requiring pinch-to-zoom to read

**Why It's Wrong:**
More than half your traffic is mobile. Making it unusable for them is malpractice.

**How to Fix:**
- Minimum 44x44px tap targets
- Responsive design that reflows, not just scales
- Test on actual devices, not just browser simulators
- Mobile-first design approach

**Principle Violated:** Mobile first is not optional

---

### Sin #4: Wall of Text

**Examples to Add:**
- Long paragraphs with no breaks
- No visual hierarchy
- No bullet points or lists
- No images or visual breaks

**Why It's Wrong:**
People scan, they don't read. Walls of text get ignored.

**How to Fix:**
- Break content into short paragraphs (2-3 sentences max)
- Use subheadings, bullet points, and lists
- Add white space generously
- Include relevant images to break up text

**Principle Violated:** Respect the user's time, white space is not wasted space

---

### Sin #5: Generic Stock Photos

**Examples to Add:**
- Fake corporate handshake photos
- Unrealistically diverse team photos that scream "stock"
- Images that add no value to the message
- Using the same stock photos competitors use

**Why It's Wrong:**
Generic stock photos signal "we didn't care enough to create something real."

**How to Fix:**
- Use real photos of real people (your team, customers)
- If you must use stock, choose unusual/unique images
- Ensure images support the message, not just fill space
- Consider illustrations or graphics instead

**Principle Violated:** Trust is built through authenticity

---

### Sin #6: Auto-Playing Video/Audio

**Examples to Add:**
- Videos that auto-play with sound
- Background music that can't be turned off
- Pop-up videos that obstruct content

**Why It's Wrong:**
Users hate it. It's intrusive, disrespectful, and drives people away.

**How to Fix:**
- Never auto-play with sound
- Always provide visible controls
- Make auto-play optional and off by default

**Principle Violated:** Respect the user's time and preferences

---

### Sin #7: Overly Complex Navigation

**Examples to Add:**
- Mega menus with 50+ links
- Unclear labels ("Solutions", "Services" - which is which?)
- Navigation that changes structure on different pages
- Hidden navigation with no clear indicator

**Why It's Wrong:**
If users can't find what they need, they leave.

**How to Fix:**
- Limit top-level navigation to 5-7 items
- Use clear, specific labels
- Maintain consistent navigation across site
- Test navigation with real users

**Principle Violated:** Clarity over cleverness, respect the user's time

---

### Sin #8: Forms That Punish Users

**Examples to Add:**
- Asking for unnecessary information
- Unclear error messages
- Errors only shown after submission
- No indication of required fields

**Why It's Wrong:**
Every unnecessary field reduces completion rate.

**How to Fix:**
- Only ask for essential information
- Inline validation with helpful error messages
- Clear indication of required vs. optional
- Progress indicators for multi-step forms

**Principle Violated:** Respect the user's time, function over form

---

### Sin #9: Slow Load Times

**Examples to Add:**
- Unoptimized images (5MB hero image)
- Too many scripts and plugins
- No caching strategy
- Render-blocking resources

**Why It's Wrong:**
Every second of load time increases bounce rate.

**How to Fix:**
- Optimize and compress all images
- Minimize and bundle scripts
- Implement caching
- Use lazy loading for below-fold content
- Aim for under 3-second load time

**Principle Violated:** Respect the user's time

---

### Sin #10: Ignoring Accessibility

**Examples to Add:**
- No alt text on images
- No keyboard navigation support
- Color as the only indicator (red/green for error/success)
- No ARIA labels

**Why It's Wrong:**
You're excluding users with disabilities (and it's often illegal).

**How to Fix:**
- Alt text for all meaningful images
- Ensure keyboard navigation works
- Use multiple indicators (color + icon + text)
- Test with screen readers
- Follow WCAG guidelines

**Principle Violated:** Design is for everyone, not just people like you

---

## How to Use This Document

1. **Before designing**: Review to avoid common mistakes
2. **During review**: Use as a checklist
3. **When giving feedback**: Reference specific sins by name
4. **When learning**: Study each example deeply

## Adding New Examples

When you encounter terrible design:

1. Screenshot it
2. Document what's wrong
3. Explain why it fails
4. Propose how to fix it
5. Connect it to a principle

**Bad design is a better teacher than good design, but only if you study it critically.**
