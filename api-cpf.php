<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$cpf = preg_replace('/\D/', '', $_GET['cpf'] ?? '');
if (!$cpf) { echo json_encode(["error" => "CPF não informado"]); exit; }

$ch = curl_init("https://api.cpf-brasil.org/cpf/$cpf");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "X-API-Key: 0f5609379febc57cfa41707100964838bed9bf31df8c13ce85a8e04524ca5638"
]);
$response = curl_exec($ch);
$err = curl_error($ch);
curl_close($ch);

if ($err) {
    echo json_encode(["success" => false, "error" => "Curl Error: " . $err]);
    exit;
}


$responseData = json_decode($response, true);

if ($responseData && isset($responseData['data'])) {
    $data = $responseData['data'];
    $mappedData = [
        'success' => true,
        'nome' => $data['NOME'] ?? '',
        'NOME' => $data['NOME'] ?? '',
        'cpf' => $cpf,
        'CPF' => $cpf,
        'nascimento' => $data['NASC'] ?? null,
        'NASCIMENTO' => $data['NASC'] ?? null,
        'mae' => $data['NOME_MAE'] ?? null,
        'MAE' => $data['NOME_MAE'] ?? null,
        'nome_mae' => $data['NOME_MAE'] ?? null,
        'sexo' => $data['SEXO'] ?? null,
        'SEXO' => $data['SEXO'] ?? null,
    ];
    echo json_encode($mappedData);
} else {
    echo $response;
}
