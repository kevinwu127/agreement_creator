"use strict";

function demo(input) {
    // create document
	var doc = new jsPDF();

    doc.setFontSize(20);
    doc.setFontType("bold");

    var data = JSON.parse(input);
    var mother_name = data[0].value;
    var father_name = data[1].value;
    var child_name = data[2].value;
    var mother_custody = data[3].value;
    var mother_custody_days = data[4].value;
    var father_custody = data[5].value;
    var father_custody_days = data[6].value;
    var relocation_distance = data[7].value;
    var relocation_distance_type = data[8].value;
    var big_ticket = data[9].value;
    var mother_medical = data[10].value;
    var father_medical = data[11].value;
    var replace_device = data[12].value;
    var life_insurance = data[13].value;
    var state = data[14].value;
     // enter name here for demo purposes only

    //set font and font size
    doc.setFontSize(11);
    doc.setFont("times");

    // add disclaimer
    doc.setFontType("italic");
    doc.text(20, 20, 'Disclaimer: The following sample child support agreement is intended only as a guide that may not ');
    doc.text(20, 25, 'reflect the needs of your situation. It should not be considered legal advice. We strongly encourage you');
    doc.text(20, 30, 'to seek the counsel of a family law professional [FLN search link] before committing to any child support');
    doc.text(20, 35, 'terms.');

    // add intro
    doc.setFontType("normal");
    doc.text(20, 50, mother_name + ' (Mother) and ' + father_name + ' (Father), the biological parents (Parents) of');
    doc.text(20, 55, child_name + ' (Child), in the interest of cooperative parenting for the mental, physical, financial, and ');
    doc.text(20, 60, 'emotional well-being of our Child, enter into the following support agreement:');

    // physical residence
    doc.text(20, 70, '1. PHYSICAL RESIDENCE');
    doc.text(25, 75, 'a.');
    doc.text(30, 75, 'Child\'s residence');
    doc.text(30, 80, 'i.');
    doc.text(35, 80, 'Mother shall have ' + mother_custody + ' physical custody of Child ' + mother_custody_days + ' day(s) per week.');
    doc.text(30, 85, 'ii.');
    doc.text(35, 85, 'Father shall have ' + father_custody + ' physical custody of Child ' + father_custody_days + ' day(s) per week.');
    doc.text(25, 90, 'b.');
    doc.text(30, 90, 'Schedule flexibility');
    doc.text(30, 95, 'i.');
    doc.text(35, 95, 'Each Parent shall make all best efforts to ensure timely exchanges of physical custody and \npromptly communicate any delays.');
    doc.text(30, 105, 'ii.');
    doc.text(35, 105, 'Reasonable accommodations should be made to allow for special events, emergencies, \nfamily gatherings, holidays, and vacations.');
    doc.text(30, 115, 'iii.');
    doc.text(35, 115, 'Parents agree to act equitably in creating a schedule for alternating physical custody for \nspecial events, emergencies, family gatherings, holidays, and vacations.');
    doc.text(25, 125, 'c.');
    doc.text(30, 125, 'Relocation');
    doc.text(30, 130, 'i.');
    doc.text(35, 130, 'If either Parent relocates more than ' + relocation_distance + ' ' + relocation_distance_type + ' away from their current residence, \nthat Parent will notify the other Parent as far in advance as possible so both Parents can \ncome to a new agreement for Child\'s physical residence so as to act in Child\'s best interests \nwhile causing the least amount of disruption in their established school, community, and \nrelationship ties. Parents will also agree to a new residence and visitation schedule as \ndefined in Section 1 (a) of this agreement.');
    doc.text(30, 155, 'ii.');
    doc.text(35, 155, 'If Parents cannot come to a new agreement regarding Child\'s residence and visitation, they \nwill use the conflict resolution methods defined in Section 4 of this agreement.');

    // legal custody
    doc.text(20, 170, '2. LEGAL CUSTODY AND DECISION-MAKING');
    doc.text(25, 175, 'a.');
    doc.text(30, 175, 'Legal custody \nParents will share legal custody of Child and cooperate in making substantial decisions for \npurposes such as education, medical care, or Child\'s general safety except when emergencies or \nexigent circumstances do not allow the Parents to confer, in which case the deciding Parent will \nact in the best interest of Child while doing their best to respect the other Parent\'s values.');
    doc.text(25, 197, 'b.');
    doc.text(30, 197, 'Consistent parenting practices \nParents will endeavor to maintain consistency in Child\'s daily routine - such as bedtime, \nelectronics/media use, and meals/diet - as well as cooperate on and reinforce each other\'s \nappropriate discipline. These parenting practices shall be discussed regularly and renewed or \naltered as necessary.');
    doc.text(25, 219, 'c.');
    doc.text(30, 219, 'Education \nAs practically as possible, all decisions regarding Child\'s primary and secondary education shall \nbe made in the best interest of Child and not the preference or convenience of either Parent. \nBoth Parents commit to providing Child with the necessary resources to meet their academic \nand learning needs. For private education, Parents will come to a separate agreement regarding \nenrollment and tuition.');
    doc.text(25, 244, 'd.');
    doc.text(30, 244, 'Community, religious, and extracurricular activities \nBoth Parents believe that Child should be an active member of their community and will \nencourage and support Child\'s involvement in school, neighborhood, and civic activities. Parents \nagree to the role religion, spirituality, and culture will play in Child\'s life, including services and \ntraditions. Parents further agree to permit and encourage Child to pursue a reasonable number \nof extracurricular activities to broaden Child\'s development.');

    doc.addPage();

    // child support and expenses
    doc.text(20, 20, '3. CHILD SUPPORT AND EXPENSES');
    doc.text(25, 25, 'a.');
    doc.text(30, 25, 'Management of child support \nParents will visit the SupportPay website (http://supportpay.com/) and both shall enroll in the \nprogram for at least a one-year subscription no later than ten (10) calendar days from the \nsigning of this order. The parties shall thereafter use SupportPay.com for all child and spousal \nsupport payments including, but not limited to, the expenses listed in this section using the \nwebsites features. Parents\' respective attorneys shall have \"read-only\" access to their accounts \nto ensure confirmation of timely payments. Neither party shall fail to renew the annual \nsubscription to the website without a signed and filed stipulation by both parties or further \norder of court.');
    doc.text(25, 62, 'b.');
    doc.text(30, 62, 'Day-to-day living expenses \nWhile Child resides with either Parent, that Parent shall be solely responsible for regular daily \nexpenses such as food, clothing, and entertainment. If Parents\' custody arrangement or \ncircumstances create a disproportionate financial burden on one Parent, such as one Parent \nhaving custody for 5/7th of the week, the other shall compensate them for one half of the added \nexpenses.');
    doc.text(25, 88, 'c.');
    doc.text(30, 88, 'Unusual large expenses');
    doc.text(30, 93, 'i.');
    doc.text(35, 93, 'Family vacations \nChild\'s expenses for vacations taken with either Parent will be the sole responsibility of that \nParent unless alternative arrangements are made in advance.');
    doc.text(30, 107, 'ii.');
    doc.text(35, 107, 'School/independent trips \nFor any optional school trips, summer camps, vacations with friends\' families, or similar \nexcursions that are primarily for the benefit of Child, Parents shall share equally in Child\'s \nexpenses. If either Parent is required or chooses to accompany Child, that Parent shall be \nresponsible for their own expenses.');
    doc.text(30, 129, 'iii.');
    doc.text(35, 129, 'Big ticket items \nAny items purchased for Child costing more than $' + big_ticket + ' that are \nneither considered gifts from either Parent nor exclusively for use and enjoyment at only one \nParent\'s residence shall be shared equally between the Parents. Examples of such items may \ninclude a laptop computer, mobile phone, or automobile.');
    doc.text(30, 151, 'iv.');
    doc.text(35, 151, 'Miscellaneous \nParents will make their best efforts to share equally or equitably in any unexpected large \nexpenses not covered above.');

    doc.text(25, 166, 'd.');
    doc.text(30, 166, 'Management of shared expenses');
    doc.text(30, 171, 'i.');
    doc.text(35, 171, 'Medical/dental/vision \nDeductibles and other costs not covered by insurance for regular and wellness medical, \ndental, and vision checkups and out-of-pocket expenses for medical or dental devices and \nglasses/contact lenses will be paid ' + mother_medical + '% by Mother and ' + father_medical + '% by Father. If Child loses or \nbreaks any of their medical or dental devices or glasses/contact lenses, out-of-pocket \nreplacement expenses shall be ' + replace_device);
    doc.text(30, 200, 'ii.');
    doc.text(35, 200, 'Educational');
    doc.text(35, 205, '1.');
    doc.text(40, 205, 'Primary and secondary \nAll normal and necessary expenses associated with Child\'s education, including \nuniforms, bookbags, lunch programs, and school supplies, will be shared evenly \nbetween Parents. Expenses for agreed-upon supplemental educational activities such as \ntutoring and field trips shall also be shared evenly. When Parents cannot agree on \nnonessential expenses, one Parent may choose to pay in full or refer the disagreement \nto the conflict resolution procedures outlined below.');
    doc.text(35, 235, '2.');
    doc.text(40, 235, 'Post-secondary \nParents agree that it is important for Child\'s education to continue beyond high school \nand intend to contribute to the cost of this education. Parents will establish a college \nfund and each will be responsible for monthly or annual contributions to be established \nin a separate agreement that will be updated annually. Parents\' contribution to actual \ntuition, living, and miscellaneous expenses associated with post-secondary education \nnot covered by Child\'s education fund will be addressed by a separate agreement at \nleast six months (180 days) prior to Child\'s enrollment.');

    doc.addPage();

    doc.text(30, 20, 'iii.');
    doc.text(35, 20, 'Extracurricular \nParents agree to share equally the costs of Child\'s academic, artistic, athletic, or other \nextracurricular activities. If Parents cannot agree on the quality, quantity, or expense of any \nextracurricular activities, one Parent may choose to pay in full or refer the disagreement to \nthe conflict resolution procedures outlined below.');
    doc.text(30, 42, 'iv.');
    doc.text(35, 42, 'Miscellaneous \nFor all other common expenses benefitting Child not specifically covered above, Parents \nagree that it is in all parties\' best interests to share the costs equally. When Parents cannot \nagree to share an expense, one Parent may choose to pay in full or refer the disagreement \nto the conflict resolution procedures outlined below.');
    doc.text(25, 64, 'e.');
    doc.text(30, 64, 'Medical insurance \nParents will ensure that Child has continuous medical coverage until Child reaches age 26 or \nobtains their own medical insurance, whichever comes first. Child\'s medical insurance policy will \nbe determined by which Parents\' plan offers the most comprehensive benefits for the best price \nand any out-of-pocket cost will be shared by both Parents. If it becomes necessary to include \nChild on both Parents\' plans to provide comprehensive coverage, Parents will share equally the \ntotal out-of-pocket cost.');
    doc.text(25, 94, 'f.');
    doc.text(30, 94, 'Income tax \nParents will split Child care income tax benefits in proportion to their respective financial \ncontributions.');
    doc.text(25, 108, 'g.');
    doc.text(30, 108, 'Disability insurance \nBoth Parents will maintain disability insurance coverage.');
    doc.text(25, 118, 'h.');
    doc.text(30, 118, 'Life insurance \nParents agree to purchase individual life insurance policies in the amount of $' + life_insurance + ' naming Child \nas the sole beneficiary and maintain those or equivalent policies until Child reaches age 25.');
    doc.text(25, 132, 'i.');
    doc.text(30, 132, 'Duty to inform \nIf either Parent experiences financial hardship due to unforeseen circumstances such as \nunemployment or catastrophic expenses and reasonably expects a delay or inability to provide \nfor Child or reimburse the other Parent for Child expenses, they will take affirmative steps to \nnotify the other Parent of the situation as soon as possible. Parents agree to make reasonable \naccommodations for each other in the event of temporary financial hardships. In the event of \nsustained financial hardship for one or both Parents, the Parents may choose to amend or \nsupersede this agreement.');

    // conflict resolution
    doc.text(20, 170, '4. CONFLICT RESOLUTION');
    doc.text(25, 175, 'a.');
    doc.text(30, 175, 'Guiding principle \nParents agree to make every effort to resolve all conflicts related to this child support \nagreement outside of the court system. Parents further agree to prevent or limit as much as \npossible Child\'s exposure to any conflict related to this child support agreement.');
    doc.text(25, 193, 'b.');
    doc.text(30, 193, 'Procedure');
    doc.text(30, 198, 'i.');
    doc.text(35, 198, 'Financial conflict \nWhen Parents are unable to agree on expenses related to Child, they agree to use \nSupportPay\'s conflict resolution systems.');
    doc.text(30, 212, 'ii.');
    doc.text(35, 212, 'Non-financial conflict \nFor non-financial conflict that cannot be addressed through SupportPay, Parents will \narrange a three-person panel of arbiters consisting of one party chosen by each Parent and \na third party agreed upon by both Parents. Should the conflict remain unresolved, Parents \nwill meet with a professional mediator, the cost of which shall be shared evenly. Mediation \nshall be considered binding.');

    // death or disability
    doc.text(20, 243, '5. DEATH OR DISABILITY');
    doc.text(25, 248, 'a.');
    doc.text(30, 248, 'Parents\' wills \nBoth Parents agree to execute properly signed, witnessed, and notarized wills providing, via \ntrust, for Child as primary heir or in equal proportion to any other existing or future natural \nchildren of either Parent, respectively. Parents\' wills shall also set forth guardianship and \narrangements in the event of their death.');

    doc.addPage();

    doc.text(25, 20, 'b.');
    doc.text(30, 20, 'Existing relationships \nIn the event of either Parent\'s death, the other Parent will make all best and reasonable efforts to \nensure that Child\'s existing relationships with the deceased Parent\'s family and friends will \nnot be interrupted and remain intact.');

    // agreement provisions and governing law
    doc.text(20, 43, '6. AGREEMENT PROVISIONS AND GOVERNING LAW');
    doc.text(25, 48, 'a.');
    doc.text(30, 48, 'Periodic review and amendment \nParents agree to review the terms of this agreement on no less than an annual basis to \ndetermine if it continues to adequately address the then-current needs of Child. Either Parent \nmay request clarification of the terms of the agreement or propose changes. If Parents cannot \nagree on proposed changes, they shall follow the conflict resolution procedures contained in \nthis agreement. Any amendments to this agreement must be by mutual written consent of both \nParents.');
    doc.text(25, 77, 'b.');
    doc.text(30, 77, 'Governing law \nThis agreement is made in the State of ' + state + ' and is intended to \nconform to the laws thereof, regardless of either Parent\'s current or future residence.');
    doc.text(25, 91, 'c.');
    doc.text(30, 91, 'Effectiveness \nThis agreement shall remain in effect until voided or superseded in writing by both Parents or \nuntil Child reaches majority age.');
    doc.text(25, 105, 'd.');
    doc.text(30, 105, 'Severability \nIf any clause herein is determined to be unenforceable, that clause shall be severable and the \nremainder of the agreement shall remain in effect.');

	// Save the PDF
	//doc.save('Test.pdf');

    // Open the PDF
    var string = doc.output('datauristring');
    var x = window.open();
    x.document.open();
    x.document.location = string;
}

jQuery(document).ready(function() {

    jQuery('#demo').on('submit', function(e) {
        e.preventDefault();
        var form = jQuery('#demo');
        var data = JSON.stringify(form.serializeArray());
        console.log(data);
        demo(data);
    });

    jQuery('#vmap').vectorMap({
        map: 'usa_en',
        backgroundColor: '#a5bfdd',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#f4f3f0',
        enableZoom: false,
        hoverColor: '#c9dfaf',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: [],
        showTooltip: true,
        onRegionClick: function(element, code, region) {

        }
    });

});


