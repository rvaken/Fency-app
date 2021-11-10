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

    public function getFences()
    {
        $stat_queries = [
            "names" => [
                "label" => 'name',
                "qry" => "SELECT COUNT (category) as coffees FROM products WHERE category IS 'coffee'"
            ],
            "prices" => [
                "label" => 'price',
                "qry" => "SELECT COUNT (category) as teas FROM products WHERE category IS 'tea'"
            ],
            "widths" => [
                "label" => 'width',
                "qry" => "SELECT COUNT (role_id) as customers FROM users WHERE role_id IS '0'"
            ],
            "materials" => [
                "label" => 'material',
                "qry" => "SELECT COUNT (role_id) as employees FROM users WHERE role_id IS '1' "
            ],
            "stock" => [
                "label" => 'stock',
                "qry" => "SELECT COUNT (role_id) as employees FROM users WHERE role_id IS '1' "
            ],
        ];

        $fences = [];
        $errors = [];

        foreach ($stat_queries as $key => $value) {
            try {
                $stmt = $this->db->prepare($value['qry']);

                $res = $stmt->execute();
                if ($row = $res->fetchArray(SQLITE3_ASSOC)) {
                    $stats[$key] = $row[$key];
                };
            } catch (\Throwable $th) {
                $errors[$value[0]] = $this->db->lastErrorMsg();
            }
        }

        if (empty($errors)) {
            return $fences;
        } else {
            return false;
        }
    }
}
