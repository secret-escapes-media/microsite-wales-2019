---
layout: competition
id: competition
nav: true
nav-order: 5

title: Compet&shy;ition
long-title: Win your very own boutique escape in Wales
intro: Win a gorgeous stay in the Vale, in a luxurious manor house retreat. Spend two nights indulging in five-star, boutique pampering, before exploring the Welsh countryside from your country bolthole.
enter-cta: Enter Now

features:
  - id: stay
    title: The Stay
    description: You’ll spend two nights at the stylish Gileston Manor, a historic Grade II-listed property set in beautiful gardened grounds. Staying in the Apple Store, your suite features a mezzanine with roll-top bath, king-size bed, a kitchen and dining and seating areas. The rustic-chic aesthetic perfectly suits a break framed by outdoor adventures, with a touch of irresistible luxury for you and a special someone.
  - id: the-vale
    title: The Vale
    description: The Vale of Glamorgan is a rural idyll in south Wales. Magnificent castles and pretty villages rub shoulders with classic seaside towns and nature reserves. Don’t miss the beautifully historic village of Llantwit Major, the atmospheric Norman ruins of Coity and Newcastle castles, nor the choice of delightful beaches at Porthcawl.

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