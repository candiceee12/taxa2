<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$cpf = preg_replace('/\D/', '', $_GET['cpf'] ?? '');
if (!$cpf) { echo json_encode(["error" => "CPF não informado"]); exit; }

$token = "0tsht7utxfd4uqgn9jwgun";
$url = "https://back.blackflow.site/consultar-filtrada/cpf?cpf=$cpf&token=$token";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);
$response = curl_exec($ch);
$err = curl_error($ch);
curl_close($ch);

if ($err) {
    echo json_encode(["success" => false, "error" => "Curl Error: " . $err]);
    exit;
}

$data = json_decode($response, true);

if ($data && !empty($data['NOME'])) {
    $mappedData = [
        'success' => true,
        'nome' => $data['NOME'] ?? '',
        'NOME' => $data['NOME'] ?? '',
        'cpf' => $cpf,
        'CPF' => $cpf,
        'nascimento' => $data['DT_NASCIMENTO'] ?? null,
        'NASCIMENTO' => $data['DT_NASCIMENTO'] ?? null,
        'mae' => $data['NOME_MAE'] ?? null,
        'MAE' => $data['NOME_MAE'] ?? null,
        'nome_mae' => $data['NOME_MAE'] ?? null,
        'sexo' => $data['SEXO'] ?? null,
        'SEXO' => $data['SEXO'] ?? null,
        'email' => $data['EMAIL'] ?? null,
        'telefone' => $data['CELULAR1'] ?? null,
    ];
    echo json_encode($mappedData);
} else {
    echo json_encode(["success" => false, "error" => "CPF não encontrado", "raw" => $data]);
}
