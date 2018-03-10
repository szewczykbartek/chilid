<?php
try{
  $pdo = new PDO('mysql:host=localhost;dbname=paraboli_chilid', 'paraboli_admin', 'admin312');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $pdo->prepare("SELECT * FROM counter WHERE system = :system", array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
  $stmt->execute(array(
    ':system' => $_GET['system']
  ));
  $result = $stmt->fetch(PDO::FETCH_ASSOC);

  if($_GET['method'] == 'plus')
    $count = $result['count'] + 1;
  if($_GET['method'] == 'minus')
    $count = $result['count'] - 1;

  // UPDATE

  $pdo = new PDO('mysql:host=localhost;dbname=paraboli_chilid', 'paraboli_admin', 'admin312');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $pdo->prepare("UPDATE counter SET count = :count WHERE system = :system");
  $stmt->execute(array(
    'system' => $_GET['system'],
    'count' => $count
  ));

  echo '{"status":"ok", "system": "counter_'.$_GET['system'].'", "count": "'.$count.'"}';
}
catch(Exception $e) {
  echo '{"status":"error"}';
}
?>
