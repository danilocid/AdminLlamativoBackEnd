var { Router } = require("express");
var { check } = require("express-validator");
var { validator } = require("../util/validator");
var { JWTvalidator, JWTvalidatorHeader } = require("../util/jwt-validator");

var router = Router();
var {
  getIssues,
  getIssue,
  createIssue,
  updateIssue,
  getAllSections,
  getAllStatus,
  getIssuesBySection,
  getIssuesByStatus,
  getIssuesReport,
  getIssuesByType,
  getAllTypes,
} = require("../controllers/issuesController");
router.get("/report", JWTvalidatorHeader, getIssuesReport);

router.get("/", JWTvalidatorHeader, getIssues);
router.get("/:id", JWTvalidatorHeader, getIssue);
router.post(
  "/",
  [
    check("issue").not().isEmpty().withMessage("El nombre es requerido"),
    check("id_section").not().isEmpty().withMessage("La sección es requerida"),
    check("id_status").not().isEmpty().withMessage("El estado es requerido"),
    check("id_type").not().isEmpty().withMessage("El tipo es requerido"),
  ],
  JWTvalidatorHeader,
  validator,
  createIssue
);
router.post(
  "/:id",
  [
    check("issue").not().isEmpty().withMessage("El nombre es requerido"),
    check("id_section").not().isEmpty().withMessage("La sección es requerida"),
    check("id_status").not().isEmpty().withMessage("El estado es requerido"),
    check("id_type").not().isEmpty().withMessage("El tipo es requerido"),
  ],
  JWTvalidatorHeader,
  validator,
  updateIssue
);
router.get("/sections/all", JWTvalidatorHeader, getAllSections);
router.get("/status/all", JWTvalidatorHeader, getAllStatus);
router.get("/section/:id", JWTvalidatorHeader, getIssuesBySection);
router.get("/status/:id", JWTvalidatorHeader, getIssuesByStatus);
router.get("/type/:id", JWTvalidatorHeader, getIssuesByType);
router.get("/types/all", JWTvalidatorHeader, getAllTypes);

module.exports = router;
