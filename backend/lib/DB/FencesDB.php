<?php



namespace Fency\DB;

use \Fency\DB\DB;

class FencesDB
{
    protected $db;


    public function __construct(DB $db)
    {
        $this->db = $db;
    }

    public function getFenceAmt()
    {
        $sql = "SELECT COUNT (fences_id) from fences";
        $stmt = $this->db->prepare($sql);
        $res = $stmt->execute();

        if ($row = $res->fetchArray(SQLITE3_ASSOC)) {
            $data = $row;
        };

        return $data;
    }


    public function getFences()

    {
        $fences = [];
        $errors = [];
        $fenceAmt = 4;

        for ($x = 1; $x <  $fenceAmt + 1; $x++) {


            $fence_queries = [
                "name" => [
                    "label" => 'name',
                    "qry" => "SELECT name FROM fences where fences_id IS $x"
                ],
                "price" => [
                    "label" => 'price',
                    "qry" => "SELECT price FROM fences where fences_id IS $x"
                ],
                "width" => [
                    "label" => 'width',
                    "qry" => "SELECT width FROM fences where fences_id IS $x"
                ],
                "material" => [
                    "label" => 'material',
                    "qry" => "SELECT material FROM fences where fences_id IS $x"
                ],
                "stock" => [
                    "label" => 'stock',
                    "qry" => "SELECT stock FROM fences where fences_id IS $x"
                ],
            ];

            $fences_catcher = [];

            foreach ($fence_queries as $key => $value) {
                try {
                    $stmt = $this->db->prepare($value['qry']);
                    $res = $stmt->execute();

                    if ($row = $res->fetchArray(SQLITE3_ASSOC)) {
                        $fences_catcher[$key] = $row[$key];
                    };
                } catch (\Throwable $th) {
                    $errors[$value[0]] = $this->db->lastErrorMsg();
                }
            }
            array_push($fences, $fences_catcher);
        };


        if (empty($errors)) {
            return $fences;
        } else {
            return false;
        }
    }
}
