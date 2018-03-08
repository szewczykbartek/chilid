<?php
try{
  $pdo = new PDO('mysql:host=localhost;dbname=paraboli_chilid', 'paraboli_admin', 'admin312');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


  $stmt = $pdo->prepare("SELECT * FROM counter WHERE system = :system", array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
  $stmt->execute(array(
    ':system' => 'likes'
  ));
  $resultHistory = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo '<pre>',print_r($resultHistory,1),'</pre>';






  // $pdo = new PDO('mysql:host=localhost;dbname=paraboli_chilid', 'paraboli_admin', 'admin312');
  // $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //
  // $stmt = $pdo->prepare("UPDATE counter SET count = :count WHERE system = :system");
  // $stmt->execute(array(
  //   'system' => $_GET['system'],
  //   'count' => $_GET['count']
  // ));

  echo '{"status":"ok"}';
}
catch(Exception $e) {
  echo '{"status":"error"}';
}
?>
