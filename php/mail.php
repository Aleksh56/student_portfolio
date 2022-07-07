ini_set('display_errors','1');
error_reporting(-1);

$name = $_POST['name'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$name = urldecode($name);
$email = urldecode($email);
$name = trim($name);
$email = trim($email);

if(mail("averyanovv.a@yandex.ru", "Заявка с сайта", "ФИО:".$fname.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
{
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}