const formulatePayment = (choice, amount) => {
  const initialPayment = Math.round((10 / 100) * amount);
  const remainingTotal = amount - initialPayment;
  if (choice == 'weekly') {
    let weeklyAmountPayment = 0;
    let weekly = remainingTotal / weeklyAmountPayment;
    while (weekly > 156) {
      weeklyAmountPayment = weeklyAmountPayment + 50;
      let weeks = remainingTotal / weeklyAmountPayment;
      if (weeks % 50 !== 0) {
        weekly = Math.trunc(weeks);
      }
    }
    //Calculating the remaining payment that is lost and adding it as an extra payment.
    let calculatedAmount = weeklyAmountPayment * weekly + initialPayment;
    let remainingWeekly = Math.trunc(amount - calculatedAmount);
    console.log(
      `You will be paid $${initialPayment} as initial payment with $${remainingWeekly} as an extra payment and $${weeklyAmountPayment} for ${weekly} weeks.`
    );
    return { time: weekly, amount: weeklyAmountPayment };
  } else if (choice == 'monthly') {
    let monthlyPrice = 0;
    3;
    let monthly = remainingTotal / monthlyPrice;
    while (monthly > 36) {
      monthlyPrice = monthlyPrice + 100;
      let months = remainingTotal / monthlyPrice;
      if (months % 100 !== 0) {
        monthly = Math.trunc(months);
      }
    }
    let calculatedAmount = monthlyPrice * monthly + initialPayment;
    let remaining = Math.trunc(amount - calculatedAmount);
    console.log(
      `You will be paid $${initialPayment} as initial payment with $${remaining} as an extra payment and $${monthlyPrice} for ${monthly} months.`
    );
    return { time: monthly, amount: monthlyPrice };
  } else {
    return null;
  }
};
//TEST CASES
// In terminal run "node task02.js"
// If weekly happens to $122 then rounding up to $150 and calculating.
formulatePayment('weekly', 20935.2);
formulatePayment('weekly', 1000);
formulatePayment('weekly', 1111);
formulatePayment('weekly', 123456);
formulatePayment('weekly', 12345.666);
//If monthly happens to $122 then rounding upto $200 and calculating.
formulatePayment('monthly', 4831.2);
formulatePayment('monthly', 1000);
formulatePayment('monthly', 1111);
formulatePayment('monthly', 123456);
formulatePayment('monthly', 12345.56);
