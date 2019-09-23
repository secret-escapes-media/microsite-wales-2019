---
layout: competition
id: competition
nav: true
nav-order: 5

title: Compet&shy;ition
long-title: Win your very own boutique escape in Wales
intro: Brought to you by Boutique Retreats, enjoy a whole week’s stay at the rustic and luxurious Royce Barn. Set within charming Monmouth, it’s a perfect bolthole from which to discover south Wales and beyond...
enter-cta: Enter Now

features:
  - id: boutique-retreats
    title: About Boutique Retreats
    description: From raising the flag on your own private island and sailing a boat to your cottage, to watching the stars over the sea from your hot tub, Boutique Retreats specialise in unique, stylish properties that celebrate their surrounds whilst embracing luxurious living.
  - id: royce-barn
    title: About Royce Barn
    description: Tucked away near the wonderful Welsh town of Monmouth and bordering the Rolls family estate, this stunning 17th century barn conversion for six lucky people and up to two dogs comes complete with a hot tub, natural swimming pool, Shepherd's Hut and sauna. With breathtaking views over the Welsh hills and with beautiful gardens, it’s a wonderful retreat for a holiday.
  - id: voucher
    title: Choose your experience
    description: To help you get the best out of your escape, we’re also throwing in a £250 voucher for Virgin Experience Days – choose one big experience, or splurge on a collection of moments to share with your loved one. From helicopter tours to foraging experiences, choose your adventure in Wales.

competition-form:
  id: comp
  post-url: #getFormUrl
  expiry-date: 2050-01-01
  fields:
    - id: first-name
      type: text
      label: First Name
      required: true
    - id: surname
      type: text
      label: Surname
      required: true
    - id: email
      type: email
      label: Email address
      required: true
    - id: postcode
      type: text
      label: Postcode
      required: true
    - id: wales-opt-in
      type: radio
      label: Would you like to receive emails from Visit Wales?
      description: "If you agree, your information will be shared with Visit Wales and will be used in accordance with their <a href=\"https://www.visitwales.com/privacy-statement#CTMnewsletter\" class=\"link--underlined\">Newsletter Privacy notice</a>."
      required: true
      options:
        - id: wales-opt-in-true
          label: 'Yes'
          value: 'yes'
        - id: wales-opt-in-false
          label: 'No'
          value: 'no'
  submit: Submit Entry
  terms: >
    By submitting your entry, you agree to the <a href="#" class="js-open-modal link--underlined" data-open-modal="competition-terms">terms and conditions</a> of this competition
---