/**
 * 1. In một bảng số từ 1-100 thỏa mãn điều kiện: (gợi ý dùng 2 vòng for lồng nhau, để ý chỗ bước nhảy)
 * • Bảng số gồm 10 hàng và 10 cột
 * • Các giá trị trong hàng là liên tiếp nhau
 * • Các giá trị trong cột hơn kém nhau 10
 */

function array2D(n) {
    var content = [];
    var divArray = document.getElementById('ex1-result')
    var tagTable = document.createElement("table")
    tagTable.setAttribute("border", "1")
    for (var i = 0; i < n; i++) {
        var tagTr = document.createElement("tr")
        tagTable.appendChild(tagTr)
        content[i] = [10 * i + 1]
        for (var j = 0; j < n; j++) {
            content[i][j] = 10 * i + 1 + j
            var tagTd = document.createElement("td")
            tagTable.style.textAlign = "center"
            var textNote = document.createTextNode(content[i][j])
            tagTd.appendChild(textNote)
            tagTr.appendChild(tagTd)
        }
    }
    // console.log(content)
    divArray.appendChild(tagTable)
}
array2D(10)

/**
 * 2. Viết function nhận vào tham số là một mảng số nguyên, tìm và in ra các số nguyên tố trong mảng
 */
function checkPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}

function findPrime(arr) {
    arr = arr.split(", ")
    var check = false;
    var content = "";
    var str = document.getElementById("ex2-result")
    for (var i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i])) {
            check = true;
            content += `${arr[i]} `;
        }
    }
    if (!check) {
        str.innerHTML = "There are no primes in the array!"
        return
    }
    str.innerHTML = `The prime numbers in the array include: ${content}`
}

var n = document.getElementById('ex2').innerHTML

findPrime(n)

/**
 * 3.Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n
 */
function validate(checkClass, alertClass) {
    var n = document.getElementById(checkClass).value
    if (!n) {
        document.getElementById(alertClass).innerHTML = "Please, enter!!!"
        return
    }
    document.getElementById(alertClass).innerHTML = ""
    return n
}

function calcSumS() {
    var sum = 0;
    var n = validate("ex3", "ex3-warning")
    if (!n) return
    for (var i = 2; i <= n; i++) {
        sum += i;
    }
    sum += 2 * n
    // console.log(sum)
    document.getElementById("ex3-result").innerHTML = `S = ${sum}`
}
// calcSumS()

/**
 * 4. Viết function nhận vào tham số n, tính số lượng ước số của n. Vd: n = 8 => Ước số của 8 là : 8,4,2,1
 */
function divisor() {
    var content = "";
    var n = validate("ex4", "ex4-warning")
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            content += `${i} `;
        }
    }
    if (n == 0) {
        document.getElementById("ex4-warning").innerHTML = "Please, enter n!!!"
        return
    }
    document.getElementById("ex4-result").innerHTML = `The divisors of n include: ${content}`
}
// divisor(9)

/**
 * 5.Viết chương trình tìm số đảo ngược của 1 số nguyên dương n nhập từ bàn phím.Vd :1234 => 4321 (Gợi y: duyệt chuỗi giống như duyệt mảng)
 */
function reverseNumber() {
    var n = validate("ex5", "ex5-warning")

    var reverseNumber = "";
    if (!n) return
    n = parseInt(n);
    console.log(n)
    if (n === 0) reverseNumber = 0
    else {
        for (var i = 0; n != 0; i++) {
            reverseNumber += n % 10
            n = (n - n % 10) / 10;
        }
    }
    reverseNumber = parseInt(reverseNumber)
    // console.log(reverseNumber)
    document.getElementById("ex5-result").innerHTML = `The reverse of n: ${reverseNumber}`
}
// reverseNumber(129856)
/**
 * 6.Tìm x nguyên dương lớn nhất, biết 1+2+3+...+x ≤100
 */

function maxIf100() {
    var sum = 0;
    var x = 1;
    while (sum + x <= 100) {
        x++;
        sum += x;

    }
    // console.log(x)
    document.getElementById("ex6-result").innerHTML = `x = ${x}`
}
maxIf100()


/**
 * 7. Viết function nhận vào số n, in ra bảng cửu chương tương ứng với số đó.
 * Vd: n = 3
 */

function multiplicationTable() {
    var n = validate("ex7", "ex7-warning")
    if (!n) return
    var divContent = document.getElementById('ex7-result')
    divContent.innerHTML = ""
    for (var i = 0; i <= 10; i++) {
        var tagP = document.createElement("p")
        var textNode = document.createTextNode(`${n} x ${i} = ${n * i}`)
        tagP.appendChild(textNode)
        divContent.appendChild(tagP)
        // console.log(`${n} x ${i} = ${n * i}`)
    }
}
// multiplicationTable(4)

/**
 * 8.Viết hàm chia bài cho 4 người chơi
 * Cho 4 mảng, đại diện cho 4 người chơi
 * var players = [ [], [], [], [] ];
 * Và 1 mảng bài: var cards = ["4K", "KH", "5C", "KA","QH", "KD", "2H", "10S", "AS", "7H", "9K", "10D"]
 * Yêu cầu viết code để chia cho mỗi player 3 lá theo luật, chia lần lượt mỗi người 1 lá
 * Kết quả :
 * var player1 = ["4K","QH","AS"];
 * var player2 = ["KH", "KD","7H"];
 * var player3 = ["5C","2H","9K"];
 * var player4 = ["KA","10S","10D"];
 */
function distribute() {
    var players = [[], [], [], []]
    var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S", "AS", "7H", "9K", "10D"]
    var divContent = document.getElementById('ex8-result')
    var i = 0;
    for (var k = 0; k < 3; k++) {
        for (var j = 0; j < players.length; j++) {
            players[j][k] = cards[i]
            i++
        }
    }
    for (var j = 0; j < players.length; j++) {
        var tagP = document.createElement("p")
        tagP.innerHTML = `Player ${j + 1}:`
        divContent.appendChild(tagP)
        for (var k = 0; k < 3; k++) {
        // console.log(players[j][k]);
        var tagSpan = document.createElement("span")
        var textNode = document.createTextNode(` ${players[j][k]}`)
        tagSpan.appendChild(textNode)
        tagP.appendChild(tagSpan)       
        }
    }
}
distribute()

/**
 * 9.Vừa gà vừa chó, bó lại cho tròn, 36 con, 100 chân chẵn
 * Một câu đố dân gian nổi tiếng chắc hẳn tất cả các bạn đều biết. Và bạn có thể cũng đã biết đáp án của câu đố trên là 22 con gà và 14 con chó. Tuy nhiên, thầy giáo của Hiếu lại bắt anh ấy phải giải bài tập tổng quát: "Tìm số gà, số chó khi số tổng số con là m và tổng số chân là n". Bạn hãy giúp Hiếu giải bài toán này nhé.
 * => Đề là: viết chương trình nhập vào m là tổng số chó và gà, n là tổng số chân, yêu cầu tìm
 */
function findChickenDog() {
    var m = validate("ex9--1", "ex9-warning")
    var n = validate("ex9--2", "ex9-warning")
    if (!m || !n) {
        document.getElementById("ex9-warning").innerHTML = "Please, enter!!!"
        return
    }
    var chickens =(4 * m - n) / 2;
    var dogs = m - chickens;
    dogs = Math.floor(dogs);
    chickens = m - dogs;

    document.getElementById("ex9-result").innerHTML = `Chickens: ${chickens} <br> Dogs: ${dogs}`
    // console.log(chickens, dogs);
}
// findChickenDog(36, 100)
/**
 * 10. Nhập vào số giờ và số phút => góc lệch giữa kim giờ và kim phút. Vd 6:10
 */
function clockwiseDeg() {
    var h = validate("ex10--1", "ex10-warning")
    var m = validate("ex10--2", "ex10-warning")
    if (!h || !m) {
        document.getElementById("ex10-warning").innerHTML = "Please, enter!!!"
        return
    }
    var clockwiseDeg = 0;
    var minuteDeg = ((360 / 60) * m) % 360
    var hourDeg = ((360 / 12) * h + (m / 60) * (360 / 12)) % 360
    // if(hourDeg>=180)hourDeg-=360
    // if(minuteDeg>=180)minuteDeg-=360
    if (hourDeg > minuteDeg) clockwiseDeg = (hourDeg - minuteDeg)
    else clockwiseDeg = (minuteDeg - hourDeg)
    if (clockwiseDeg === 360) clockwiseDeg = 0
    if (clockwiseDeg >= 180) clockwiseDeg = 360 - clockwiseDeg
    document.getElementById("ex10-result").innerHTML = `Deviation angle between hour hand and minute hand: ${clockwiseDeg}<sup>o</sup>`
}
// clockwiseDeg(12,00)
/**
 * 11. Cho người dùng nhập vào 3 số nguyên, viết chương trình xuất 3 số theo thứ tự tặng dần.
 */
function increase() {
    var temp;
    var a = validate("ex11--1", "ex11-warning")
    var b = validate("ex11--2", "ex11-warning")
    var c = validate("ex11--3", "ex11-warning")
    if (!a || !b || !c) {
        document.getElementById("ex11-warning").innerHTML = "Please, enter!!!"
        return
    }
    if (a > b) {
        temp = a
        a = b
        b = temp
    }
    if (a > c) {
        temp = a
        a = c
        c = temp
    }
    if (b > c) {
        temp = b
        b = c
        c = temp
    }
    document.getElementById("ex11-result").innerHTML = `Ascending order: ${a} ${b} ${c}`
    // console.log(a, b, c);
}
// increase(8,4,7)

/**
 * 12. Viết chương trình nhập vào ngày, tháng, năm (giả sử nhập đúng, không cần kiểm tra hợp lệ). Tìm ngày tháng năm của ngày tiếp theo. Tương tự, tìm ngày tháng năm của ngày trước đó.
 */
function beforeAfterDay() {
    var dd = +validate("ex12--1", "ex12-warning")
    var mm = +validate("ex12--2", "ex12-warning")
    var yyyy = +validate("ex12--3", "ex12-warning")
    if (!dd || !mm || !yyyy) {
        document.getElementById("ex12-warning").innerHTML = "Please, enter!!!"
        return
    }
    var nextDay = dd + 1;
    var prevDay = dd - 1;
    var nextMonth = mm;
    var prevMonth = mm;
    var nextYear = yyyy;
    var prevYear = yyyy;
    switch (mm) {
        case 5:
        case 7:
        case 8:
        case 10:
            if (dd === 31) {
                nextDay = 1;
                nextMonth = mm + 1;
            }
            if (dd === 1) {
                prevDay = 30;
                prevMonth = mm - 1;
            }
            break;
        case 1:
            if (dd === 31) {
                nextDay = 1;
                nextMonth = mm + 1;
            }
            if (dd === 1) {
                prevDay = 31;
                prevMonth = 12;
                prevYear = yyyy - 1;
            }
            break;
        case 12:
            if (dd === 31) {
                nextDay = 1;
                nextMonth = 1;
                nextYear = yyyy + 1;
            }
            if (dd === 1) {
                prevDay = 30;
                prevMonth = mm - 1;
            }
            break;
        case 2:
            if (yyyy % 400 ===0 || (yyyy % 4 === 0 && yyyy % 100 !== 0)) {
                if (dd === 28) {
                    nextDay = 29;
                } else if (dd === 29) {
                    nextDay = 1;
                    nextMonth = mm + 1;
                }
            } else {
                if (dd === 28) {
                    nextDay = 1;
                    nextMonth = mm + 1;
                }
            }
            break;
        case 3:
            if (dd === 1) {
                if (yyyy % 4 === 0) {
                    prevDay = 29;
                } else {
                    prevDay = 28
                }
            }
            break;
        default:
            if (dd === 30) {
                nextDay = 1;
                nextMonth = mm + 1;
            }
            if (dd === 1) {
                prevDay = 31;
                prevMonth = mm - 1;
            }
            break;
    }
    document.getElementById("ex12-result").innerHTML = `Yesterday: ${prevDay}/${prevMonth}/${prevYear} <br> Tomorrow: ${nextDay}/${nextMonth}/${nextYear}`
    // console.log(`Yesterday: ${prevDay}:${prevMonth}:${prevYear}`);
    // console.log(`Tomorrow: ${nextDay}:${nextMonth}:${nextYear}`);
}
// beforeAfterDay(28, 2, 2020)

/**
 * 13. Hãy viết chương trình "Chào hỏi" các thành viên của gia đình có đặc điểm sau đây: đầu tiên là máy sẽ hỏi ai đang sử dụng máy. Sau đó căn cứ vào câu trả lời nhận được mà máy cần đưa ra một câu chào hợp lý, dễ thương. Giả sử trong gia đình có 4 thành viên là: Bố (B), Mẹ (M), anh trai (A) và em gái (E);
 */
function greeting() {
    var greeting = ""
    var user = prompt("Who is using me? \nB: Bố \nM: Mẹ \nA: Anh trai \nE: Em gái");
    if (user === "B") greeting += "Hello daddy!"
    if (user === "M") greeting += "Hi mom! Have a nice day!"
    if (user === "A") greeting += "Làm việc đi thằng mặt l*!!!"
    if (user === "E") greeting += "Õh! my cute baby!"
    if (user !== "B" && user !== "M" && user !== "A" && user !== "E") {
        greeting += "Please, enter correctly"
    }

    if (greeting) alert(greeting)
}
// greeting();
/**
 * 14. Cho 3 số nguyên. Hãy viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
 */
function evenOdd() {
    var evenCount = 0
    var oddCount = 0
    var a = validate("ex14--1", "ex14-warning")
    var b = validate("ex14--2", "ex14-warning")
    var c = validate("ex14--3", "ex14-warning")
    if (!a || !b || !c) {
        document.getElementById("ex14-warning").innerHTML = "Please, enter!!!"
        return
    }
    var arr = [a, b, c]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) evenCount++
        else oddCount++
    }
    document.getElementById("ex14-result").innerHTML = `The number of even numbers: ${evenCount} <br> The number of odd numbers: ${oddCount}`
    // console.log(evenCount, oddCount)
}
// evenOdd([3,9,7])

/**
 * 15. Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày.
 */
function howManyDays() {
    var dd
    var mm = +validate("ex15--1", "ex15-warning")
    var yyyy = +validate("ex15--2", "ex15-warning")
    if (!mm || !yyyy || mm < 1 || mm > 12) {
        document.getElementById("ex15-warning").innerHTML = "Please, enter!!!"
        return
    }
    switch (mm) {
        case 2:
            if (yyyy % 400 ===0 || (yyyy % 4 === 0 && yyyy % 100 !== 0)) {
                dd = 29
                // console.log(dd);
            } else {
                dd = 28
                // console.log(dd);
            }
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dd = 31;
            // console.log(dd);
            break;
        default: dd = 30;
            // console.log(dd);
    }
    document.getElementById("ex15-result").innerHTML = `${mm}/${yyyy} has ${dd} days`
    // console.log(dd);
}
// howManyDays(12, 2013)

/**
 * 16. Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Hãy viết chương trình cho máy in tên sinh viên ở xa trường đại học nhất
 */
function calcDistance(x, y) {
    var X = validate("ex16--7", "ex16-warning")
    var Y = validate("ex16--8", "ex16-warning")
    if (!X || !Y) {
        document.getElementById("ex16-warning").innerHTML = "Please, enter!!!"
        return
    }
    var S = Math.sqrt(Math.pow((x - X), 2) + Math.pow((y - Y), 2))
    return S
}
function distance() {
    var xa = validate("ex16--1", "ex16-warning")
    var ya = validate("ex16--2", "ex16-warning")
    var xb = validate("ex16--3", "ex16-warning")
    var yb = validate("ex16--4", "ex16-warning")
    var xc = validate("ex16--5", "ex16-warning")
    var yc = validate("ex16--6", "ex16-warning")
    if (!xa || !ya || !xb || !yb || !xc || !yc) {
        document.getElementById("ex16-warning").innerHTML = "Please, enter!!!"
        return
    }
    var Sa = calcDistance(xa, ya)
    var Sb = calcDistance(xb, yb)
    var Sc = calcDistance(xc, yc)
    var arr = [Sa, Sb, Sc]
    var Smax = arr[0]
    var order = 1
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] > Smax) {
            Smax = arr[i]
            order = i + 1
        }
    }
    // console.log(Sa,Sb,Sc,Smax);
    document.getElementById("ex16-result").innerHTML = `Sinh viên ${order} ở xa trường đại học nhất`
}
// distance()
/**
 * 17. Viết chương trình nhập 3 số thực. Hãy thay tất cả các số âm bằng giá trị tuyệt đối của nó.
 * Ví dụ: a=2 b=-5 c=-8
 * Kết quả: a=2 b=5; c=8
 */
// Math.abs()
function handleAbs() {
    var a = validate("ex17--1", "ex17-warning")
    var b = validate("ex17--2", "ex17-warning")
    var c = validate("ex17--3", "ex17-warning")
    if (!a || !b || !c) {
        document.getElementById("ex17-warning").innerHTML = "Please, enter!!!"
        return
    }
    var arr = [a, b, c]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] *= -1
        }
    }
    document.getElementById("ex17-result").innerHTML = `Result: ${arr[0]}, ${arr[1]}, ${arr[2]}`
    // console.log(arr[0], arr[1], arr[2])
}
// handleAbs(2,-5,-8)
/**
 * 18. Viết chương trình nhập vào số nguyên có ba chữ số. Hãy in ra cách đọc cho nó.
 */
function read(k) {
    var string = ""
    switch (k) {
        case 0: break;
        case 1: string = "Một"; break;
        case 2: string = "Hai"; break;
        case 3: string = "Ba"; break;
        case 4: string = "Bốn"; break;
        case 5: string = "Năm"; break;
        case 6: string = "Sáu"; break;
        case 7: string = "Bảy"; break;
        case 8: string = "Tám"; break;
        case 9: string = "Chín"; break;
        default: string = ""
    }
    return string
}
function readNumber() {
    var n = validate("ex18", "ex18-warning")
    if (!n || n.toString().length>3) {
        document.getElementById("ex18-warning").innerHTML = "Please, enter!!!"
        return
    }
    n = parseInt(n)
    var string = ""
    var a = (n - n % 100) / 100
    var b = (n % 100 - n % 10) / 10
    var c = n % 10
    if (a === 0 && b === 0 && c === 0) {
        string = `Không`
    }
    else if (a === 0 && b === 0) {
        string = `${read(c)}`
    }
    else if (b === 1 && a === 0) {
        string = `Mười ${read(c)}`
    }
    else if (a === 0) {
        string = `${read(b)} Mươi ${read(c)}`
    }
    else if (b === 0 && c === 0) {
        string = `${read(a)} Trăm`
    }
    else if (b === 0) {
        string = `${read(a)} Trăm Lẻ ${read(c)}`
    }
    else if (b === 1) {
        string = `${read(a)} Trăm Mười ${read(c)}`
    }
    else string = `${read(a)} Trăm ${read(b)} Mươi ${read(c)}`
    document.getElementById("ex18-result").innerHTML = `${string}`
    // console.log(string);
}
// readNumber(128)

/**
 * 19. Viết chương trình nhập 3 cạnh của một tam giác. Hãy cho biết tam giác đó là tam giác gì. (Chú ý kiểm tra hợp lệ).
 * Ví dụ: a=2 b=2 c=1 Tam giác cân
 * a=3 b=3 c=3 Tam giác đều
 * a=3 b=4 c=5 Tam giác vuông
 */
function checkTriangle() {
    var str = ""
    var a = +validate("ex19--1", "ex19-warning")
    var b = +validate("ex19--2", "ex19-warning")
    var c = +validate("ex19--3", "ex19-warning")
    if (!a || !b || !c) {
        document.getElementById("ex19-warning").innerHTML = "Please, enter!!!"
        return
    }
    if (a < b + c && b < a + c && c < a + b) {
        if (a ** 2 === b ** 2 + c ** 2 || b ** 2 === a ** 2 + c ** 2 || c ** 2 === a ** 2 + b ** 2)
            str += "Tam giác vuông"
        else if (a === b && b === c)
            str += "Tam giác đều"
        else if (a === b || a === c || b === c)
            str += "Tam giác cân"
        else
            str += "Tam giác thường"
    }
    else str += "Ba cạnh a, b, c không thể tạo thành một tam giác"
    document.getElementById("ex19-result").innerHTML = `${str}`
}
// checkTriangle(3,4,5)

for (var i = 0; i <= 19; i++) {
    var tagWarning = document.getElementById(`ex${i}-warning`)
    if (tagWarning) {
        tagWarning.style.color = "red"
    }

    var tagResult = document.getElementById(`ex${i}-result`)
    if (tagResult) {
        tagResult.style.color = "blue"
         tagResult.style.margin = "20px"
    }
}