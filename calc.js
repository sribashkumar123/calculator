
const textarea = document.getElementsByClassName("textarea")[0];
const btn1 = document.getElementsByClassName("btn1")[0];
const btn2 = document.getElementsByClassName("btn2")[0];
const btn3 = document.getElementsByClassName("btn3")[0];
const btn4 = document.getElementsByClassName("btn4")[0];
const btn5 = document.getElementsByClassName("btn5")[0];
const btn6 = document.getElementsByClassName("btn6")[0];
const btn7 = document.getElementsByClassName("btn7")[0];
const btn8 = document.getElementsByClassName("btn8")[0];
const btn9 = document.getElementsByClassName("btn9")[0];
const btn0 = document.getElementsByClassName("btn_zero")[0];
const btn_plus = document.getElementsByClassName("btn_plus")[0];
const btn_minus = document.getElementsByClassName("btn_minus")[0];
const btn_reset = document.getElementsByClassName("btn_reset")[0];
const btn_del = document.getElementsByClassName("btn_del")[0];
const btn_point = document.getElementsByClassName("btn_point")[0];
const btn_devide = document.getElementsByClassName("btn_devide")[0];
const btn_multiply = document.getElementsByClassName("btn_multiply")[0];
const btn_equal=document.getElementsByClassName("btn_equal")[0];

btn_equal.addEventListener('click',function()
{
  const modifiedvalue = textarea.value.replace('×','*');
    textarea.value=eval(modifiedvalue);
}
);


btn_point.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '.';
});

btn0.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '0';
});

btn1.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '1';
});

btn2.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '2';
});

btn3.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '3';
});
btn4.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '4';
});
btn5.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '5';
});
btn6.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '6';
});
btn7.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '7';
});
btn8.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '8';
});
btn9.addEventListener('click', function () {
  if (textarea.value == 0) {
    textarea.value = null;
  }
  textarea.value += '9';
});


btn_plus.addEventListener('click', function () {

  if (textarea.value === "0") {
    textarea.value = "+";
  } else {
    const operators = ["+", "-", "×", "/"];
    const lastChar = textarea.value.slice(-1);

    if (!operators.includes(lastChar)) {
      textarea.value += "+";
    }
    else {
      textarea.value = textarea.value.slice(0, -1);
      textarea.value += '+';
    }
  }
});


// btn_plus.addEventListener('click',function()
// {
//     if(textarea.value==0)
//       {
//         textarea.value=0;
//       }
//       else
//       {
//         textarea.value +='+';
//       }
//       if(textarea.value[textarea.value.length-1]==)
// });
btn_minus.addEventListener('click', function () {
  if (textarea.value === "0") {
    textarea.value = "-";
  } else {
    const operators = ["+", "-", "×", "/"];
    const lastChar = textarea.value.slice(-1);

    if (!operators.includes(lastChar)) {
      textarea.value += "-";
    }
    else {
      textarea.value = textarea.value.slice(0, -1);
      textarea.value += '-';
    }
  }
});

btn_devide.addEventListener('click', function () {
  if (textarea.value === "0") {
    textarea.value = "/";
  } else {
    const operators = ["+", "-", "×", "/"];
    const lastChar = textarea.value.slice(-1);

    if (!operators.includes(lastChar)) {
      textarea.value += "/";
    }
    else {
      textarea.value = textarea.value.slice(0, -1);
      textarea.value += '/';
    }
  }
});

btn_multiply.addEventListener('click', function () {
  if (textarea.value === "0") {
    textarea.value = "×";
  } else {
    const operators = ["+", "-", "×", "/"];
    const lastChar = textarea.value.slice(-1);

    if (!operators.includes(lastChar)) {
      textarea.value += "×";
    }
    else {
      textarea.value = textarea.value.slice(0, -1);
      textarea.value += '×';
    }
  }

});


btn_reset.addEventListener('click', function () {
  textarea.value = 0;
});

btn_del.addEventListener('click', function () {
  textarea.value = textarea.value.slice(0, -1);
});

